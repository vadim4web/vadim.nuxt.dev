import getTheme from './getTheme.js'

export default () => (getTheme() === 'dark' ? '#ffffff' : '#000000')
