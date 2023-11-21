const random = (max = 10, min = 0) => {
  return Math.floor(Math.random() * (max - min)) + min
}

const color = () => {
  return random(256 - 0)
}

const lol = (...data) => {
  const loled = data
    .join(' ')
    .split('')
    .map(c => `\x1b[38;2;${color()};${color()};${color()}m${c}\x1b[0m`)
    .join('')

  console.log(loled)
}

console.lol = lol

exports.console = console
