// import { defineCollection, defineContentConfig, z } from '@nuxt/content'

// export default defineContentConfig({
//   collections: {
//     blog: defineCollection({
//       type: 'page',
//       source: 'blog/*.md',
//       schema: z.object({
//         date: z.string(),
//       }),
//     }),
//   },
// })

import { defineContentConfig, defineCollectionSource, defineCollection, z } from '@nuxt/content'

const hackernewsSource = defineCollectionSource({
  getKeys: () => {
    return fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(res => res.json())
      .then(data => data.map((key: string) => `${key}.json`))
  },
  getItem: (key: string) => {
    const id = key.split('.')[0]
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then(res => res.json())
  },
})

const hackernews = defineCollection({
  type: 'data',
  source: hackernewsSource,
  schema: z.object({
    title: z.string(),
    date: z.date(),
    type: z.string(),
    score: z.number(),
    url: z.string(),
    by: z.string(),
  }),
})

export default defineContentConfig({
  collections: {
    hackernews,
  },
})
