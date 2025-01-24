const slidesArray = [
	{
		title_en: 'Exploring System & Environments',
		title_uk: 'Дослідження Систем і Середовищ',
		content: [
			{ name: 'Windows', path: 'windows.webp' },
			{ name: 'Linux', path: 'linux.webp' },
			{ name: 'WSL', path: 'wsl.webp' },
		],
	},
	{
		title_en: 'Navigating Command Line Interfaces',
		title_uk: 'Навігація в Інтерфейсах Командного Рядка',
		content: [
			{ name: 'PowerShell', path: 'powershell.webp' },
			{ name: 'Bash', path: 'bash.webp' },
			{ name: 'any CLI --help', path: 'cli.webp', to_invert: true },
		],
	},
	{
		title_en: 'Crafting via Development Software Tools',
		title_uk: 'Створення з Інструментами для Розробки',
		content: [
			{ name: 'Figma', path: 'figma.webp' },
			{ name: 'VSCode', path: 'code.webp' },
			{ name: 'Postman', path: 'postman.webp' },
		],
	},
	{
		title_en: 'Mastering Programming Languages',
		title_uk: 'Оволодіння Мовами Програмування',
		content: [
			{ name: 'PHP', path: 'php.webp' },
			{ name: 'JavaScript', path: 'js6.webp' },
			{ name: 'Python', path: 'python.webp' },
		],
	},
	{
		title_en: 'Following World-Wide-Web Standards',
		title_uk: 'Дотримання Стандартів Всесвітньої Павутини',
		content: [
			{ name: 'HTML5', path: 'html5.webp' },
			{ name: 'CSS3', path: 'css3.webp' },
			{ name: 'ES6', path: 'es6.webp' },
		],
	},
	{
		title_en: 'Embracing the Processing Toolkit',
		title_uk: 'Використання Інструментарію Обробки',
		content: [
			{ name: 'Sass', path: 'sass.webp' },
			{ name: 'Vite', path: 'vite.webp' },
			{ name: 'TypeScript', path: 'ts2020.webp' },
		],
	},
	{
		title_en: 'Designing with CSS and UI Frameworks',
		title_uk: 'Дизайн з CSS і UI Фреймворками',
		content: [
			{ name: 'Material UI', path: 'mui.webp' },
			{ name: 'Vutify', path: 'vuetify.webp' },
			{ name: 'Tailwind CSS', path: 'tailwind.webp' },
		],
	},
	{
		title_en: 'Visualizing Advanced Graphics Concepts',
		title_uk: 'Візуалізація Концепцій Складної Графіки',
		content: [
			{ name: 'SVG, Canvas', path: `favicon_light.svg`, to_invert: true },
			{ name: 'WebGL', path: 'webgl.webp', to_invert: true },
			{ name: 'Three.js', path: 'threejs.webp', to_invert: true },
		],
	},
	{
		title_en: 'Adopting JavaScript Frameworks',
		title_uk: 'Застосування JavaScript Фреймворків',
		content: [
			{ name: 'Vue.js', path: 'vue.webp' },
			{ name: 'Nuxt.js', path: 'nuxt.webp' },
			{ name: 'React.js', path: 'react.webp' },
		],
	},
	{
		title_en: 'Advancing in Backend Development',
		title_uk: 'Просування у Серверній Розробці',
		content: [
			{ name: 'Django', path: 'django.webp' },
			{ name: 'Node.js', path: 'node.webp' },
			{ name: 'Laravel', path: 'laravel.webp' },
		],
	},
	{
		title_en: 'Using Package Managers Effectively',
		title_uk: 'Ефективне Використання Менеджерів Пакетів',
		content: [
			{ name: 'PyPI', path: 'pypi.webp' },
			{ name: 'NPM', path: 'npm.webp' },
			{ name: 'Composer', path: 'composer.webp' },
		],
	},
	{
		title_en: 'Connecting with APIs and Networking',
		title_uk: 'Робота з API та Мережевими Технологіями',
		content: [
			{ name: 'JSON', path: 'json.webp', to_invert: true },
			{ name: 'REST', path: 'rest.webp' },
			{ name: 'GraphQL', path: 'graphql.webp' },
		],
	},
	{
		title_en: 'Managing Databases Effectively',
		title_uk: 'Ефективне Управління Базами Даних',
		content: [
			{ name: 'MongoDB', path: 'mongodb.webp' },
			{ name: 'PostgreSQL', path: 'postgresql.webp' },
			{ name: 'Firebase', path: 'firebase.webp' },
		],
	},
	{
		title_en: 'Extending Platforms Acquaintance',
		title_uk: 'Розширення Знань про Платформи',
		content: [
			{ name: 'AWS', path: 'aws.webp' },
			{ name: 'GCP', path: 'gcp.webp' },
			{ name: 'Azure', path: 'azure.webp' },
		],
	},
	{
		title_en: 'Versioning with Version Control Systems',
		title_uk: 'Версіонування з Системами Контролю Версій',
		content: [
			{ name: 'Git', path: 'git.webp' },
			{ name: 'GitHub', path: 'github.webp', to_invert: true },
			{ name: 'GitLab', path: 'gitlab.webp' },
		],
	},
]

const ASSETS_DIR = '/tools/'

const arrayToHTML = content =>
	content
		.map(
			item => `
  <div
		class="content"
		style="display: flex; flex-direction: column; align-items: center; justify-content: center;
			margin-top: 2rem; text-align: center;"
	>
    <div
			class="image"
			style="background: url('${ASSETS_DIR + item.path}'); background-size: contain; background-position: center; background-repeat: no-repeat; width: 6rem; height: 6rem; margin-bottom: 1rem;
			${item.to_invert === true && 'filter: invert(var(--is-dark));'}"
		></div>
    	<p class="p2" style="margin-bottom: 3rem;"><i>${item.name}</i></p>
  </div>
`
		)
		.join('')

const slides = slidesArray.map(item => {
	return {
		title_en: item.title_en,
		title_uk: item.title_uk,
		content: arrayToHTML(item.content),
	}
})

export default slides
