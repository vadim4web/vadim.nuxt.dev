// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
).overrideRules({
  'vue/max-attributes-per-line': ['warn', { singleline: 3 }],
  'vue/singleline-html-element-content-newline': 'off',
  'vue/multiline-html-element-content-newline': 'off',
  'vue/html-indent': 'off',
  'vue/html-self-closing': 'off',
  'vue/require-default-prop': 'off',
  'vue/multi-word-component-names': 'off',
  'vue/no-unused-vars': ['error', {
    ignorePattern: '^_',
  }],
  'vue/attributes-order': [
    'error',
    {
      order: [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        ['UNIQUE', 'SLOT'],
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT',
      ],
      alphabetical: false,
    },
  ],
})
