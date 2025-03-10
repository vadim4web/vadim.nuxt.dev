import { defineContentConfig, defineCollectionSource, defineCollection, z } from '@nuxt/content'

const GITHUB_RAW_URL = 'https://raw.githubusercontent.com/vadim4web/vadim.nuxt.dev/main/content/blog'

const blogSource = defineCollectionSource({
  async getKeys() {
    // Фетчимо список постів із index.md
    const res = await fetch(`${GITHUB_RAW_URL}/index.md`)
    if (!res.ok) throw new Error('Не вдалося отримати index.md')

    const data = await res.text()
    return JSON.parse(data).map((id: string) => `${id}.md`)
  },

  async getItem(key) {
    // Отримуємо кожен Markdown-файл
    const res = await fetch(`${GITHUB_RAW_URL}/${key}`)
    if (!res.ok) throw new Error(`Не вдалося отримати ${key}`)

    return await res.text()// Повертаємо Markdown як текст
  },
})

const blog = defineCollection({
  type: 'page',
  source: blogSource,
  schema: z.object({
    date: z.string(),
  }),
})

export default defineContentConfig({
  collections: {
    blog,
  },
})
