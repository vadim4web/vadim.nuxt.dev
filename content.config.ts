import { defineContentConfig, defineCollectionSource, defineCollection, z } from '@nuxt/content'

// export default defineContentConfig({
//   collections: {
//     blog: defineCollection({
//       type: 'page',
//       schema: z.object({
//         date: z.string(), // Формат дати як string
//       }),
//     }),
//   },
// })

const blogSource = defineCollectionSource({
  getKeys: () => {
    return fetch('https://github.com/vadim4web/vadim.nuxt.dev/tree/main/content/blog/index.md')
      .then(res => res.json())
      .then(data => data.map((key: string) => `${key}.json`))
  },
  getItem: (id) => {
    return fetch(`https://github.com/vadim4web/vadim.nuxt.dev/tree/main/content/blog/${id}.md`)
      .then(res => res.json())
  },
})

const blog = defineCollection({
  type: 'data',
  source: blogSource,
  schema: z.object({
    // title: z.string(),
    date: z.date(),
  }),
})

export default defineContentConfig({
  collections: {
    blog,
  },
})
