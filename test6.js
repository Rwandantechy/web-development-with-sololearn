
const args = require('minimist')(process.argv.slice(2), {
  default: {
    port: '300'
  }
})
console.log(args)
