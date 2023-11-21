const random = (max = 10, min = 0) => {
  return Math.floor(Math.random() * (max - min)) + min
}

const color = () => {
  return random(48 - 30)
}

const lol = (...data) => {
  const loled = data
    .join(' ')
    .split('')
    .map(c => `\x1b[${color()};1;${random(8)}m${c}\x1b[0m`)
    .join('')

  console.log(`${loled}\x1b[0m`)
}

console.lol = lol

exports.console = console

console.lol('asdasd', 1, 2, 3)
