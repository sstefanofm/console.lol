const color = () => {
  return Math.floor(Math.random() * (48 - 30) + 30)
}

const lol = (...data) => {
  const loled = data
    .join(' ')
    .split('')
    .map(c => `\x1b[${color()};1;${Math.floor(Math.random() * 8)}m${c}`)
    .join('')

  console.log(`\x1b[31;1;4m${loled}\x1b[0m`)
}

console.lol = lol

exports.console = console
