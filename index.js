const lol = (message = '') => {
  const loled = message
    .split('')
    .map(c => `\x1b[31;1;${Math.floor(Math.random() * 10)}m${c}`)
    .join('')

  console.log(`\x1b[31;1;4m${loled}\x1b[0m`)
}

console.lol = lol

exports.console = console
