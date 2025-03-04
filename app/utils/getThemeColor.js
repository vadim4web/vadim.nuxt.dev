import getTheme from './getTheme'

export default () => (getTheme() === 'dark' ? '#ffffff' : '#000000')
