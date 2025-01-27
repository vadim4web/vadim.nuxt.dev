import json
import requests
import yaml
from collections import OrderedDict

# Завантаження YAML з GitHub
def ordered_load(stream, Loader=yaml.Loader, object_pairs_hook=OrderedDict):
    class OrderedLoader(Loader):
        pass
    OrderedLoader.add_constructor(
        yaml.resolver.BaseResolver.DEFAULT_MAPPING_TAG,
        lambda loader, node: object_pairs_hook(loader.construct_pairs(node)))
    return yaml.load(stream, OrderedLoader)

def get_file(url):
    try:
        r = requests.get(url)
        if r.status_code != 200:
            return None
        return r.text
    except requests.exceptions.RequestException as e:
        print(f"Request error: {e}")
        return None

# Завантаження мов з GitHub
def fetch_language_colors():
    url = "https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml"
    yaml_data = get_file(url)
    if yaml_data:
        langs_yml = ordered_load(yaml_data)
        return {lang: data.get('color') for lang, data in langs_yml.items() if 'color' in data}
    return {}

# Запис кольорів у JSON файл
def save_colors_to_json(colors, filename="pie_language_colors.json"):
    with open(filename, 'w') as json_file:
        json.dump(colors, json_file, indent=4)

# Основна логіка
def main():
    # Отримуємо кольори мов з GitHub
    language_colors = fetch_language_colors()

    # Зберігаємо кольори у JSON файл
    if language_colors:
        save_colors_to_json(language_colors)
        print("Кольори мов успішно збережено в 'pie_language_colors.json'.")
    else:
        print("Не вдалося отримати кольори мов.")

if __name__ == "__main__":
    main()
