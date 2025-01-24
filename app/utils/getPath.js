export default (path) => {
  return path.includes('https') ? path : 'https://vadim4web.github.io/' + path
}
