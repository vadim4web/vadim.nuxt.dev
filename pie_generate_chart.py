import os
import requests
import json
import subprocess
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from datetime import datetime
# from dotenv import load_dotenv
# load_dotenv()
# Витягуємо токен з оточення (GitHub Secrets)
USERNAME = "vadim4web"
TOKEN = os.getenv('MY_GITHUB_TOKEN')
def load_colors_from_json(filename="pie_language_colors.json"):
    try:
        with open(filename, 'r') as json_file:
            colors = json.load(json_file)
            return colors
    except FileNotFoundError:
        return {}

def fetch_repos(username, token):
    url = f"https://api.github.com/users/{username}/repos"
    headers = {"Authorization": f"token {token}"}
    response = requests.get(url, headers=headers)
    
    # Перевірка на успішність запиту
    if response.status_code != 200:
        print(f"Помилка при отриманні репозиторіїв: {response.status_code}")
        return []
    
    repos = response.json()
    
    # Перевірка структури відповіді
    if not isinstance(repos, list):
        print("Очікувана структура даних не отримана: не список.")
        return []
    
    return repos

def fetch_languages(repo_name, username, token):
    url = f"https://api.github.com/repos/{username}/{repo_name}/languages"
    headers = {"Authorization": f"token {token}"}
    response = requests.get(url, headers=headers)
    
    # Перевірка на успішність запиту
    if response.status_code != 200:
        print(f"Помилка при отриманні мов для репозиторію {repo_name}: {response.status_code}")
        return {}
    
    languages = response.json()
    return languages

def generate_pie_chart(data, colors, output_file="pie_languages_chart.svg"):
    labels = [f"{lang} ({(count / sum(data.values())) * 100:.1f}%)" for lang, count in data.items()]
    sizes = list(data.values())
    color_list = [colors.get(lang, "#d3d3d3") for lang in data.keys()]
    
    plt.figure(figsize=(12, 6))  # Set figure size
    plt.pie(sizes, labels=labels, colors=color_list, startangle=180)
    plt.axis('equal')  # Make the pie chart circular
    
    # Add title
    title = "STACK-CHART"
    plt.figtext(0.5, 0.99, title, ha="center", fontsize=32, fontweight="bold", color="black")
    
    # Add update text at the bottom center
    last_update = datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S UTC")  # Current time in UTC
    updated = f"Automatically updated at: {last_update}"
    plt.figtext(0.5, 0.93, updated, ha="center", fontsize=16, color="gray")
    
    # Save the pie chart
    plt.savefig(output_file, format='svg', bbox_inches='tight')
    print(f"SVG chart saved to {output_file}")

def main():
    subprocess.run(['python', 'pie_fetch_github_colors.py'])
    language_colors = load_colors_from_json()
    repos = fetch_repos(USERNAME, TOKEN)
    language_totals = {}

    for repo in repos:
        if isinstance(repo, dict):  # Перевірка, що repo є словником
            languages = fetch_languages(repo["name"], USERNAME, TOKEN)
            for lang, count in languages.items():
                try:
                    count = int(count)
                except ValueError:
                    print(f"Пропущено мову {lang} через невірне значення: {count}")
                    continue
                language_totals[lang] = language_totals.get(lang, 0) + count
        else:
            print(f"Репозиторій {repo} не є словником, пропускаємо.")
    
    print(json.dumps(language_totals, indent=4))
    generate_pie_chart(language_totals, language_colors)

if __name__ == "__main__":
    main()
