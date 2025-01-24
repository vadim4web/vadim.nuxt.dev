export default (projects, excludeIndex = undefined) => {
  const result = []

  const isInvalidIndex = index =>
    index !== excludeIndex
    && projects[index].orientation !== projects[excludeIndex].orientation

  while (result.length < 3) {
    const randomIndex = Math.floor(Math.random() * projects.length)

    if (
      excludeIndex
      && isInvalidIndex(randomIndex)
      && !result.includes(randomIndex)
    ) {
      result.push(randomIndex)
    }
    else if (!excludeIndex && !result.includes(randomIndex)) {
      result.push(randomIndex)
    }
  }

  return result.map(index => projects[index])
}
