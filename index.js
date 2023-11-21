const lol = message => {
  console.log(`\x1b[31;1;4m${message}\x1b[0m`)
}

console.lol = lol

exports.console = console
