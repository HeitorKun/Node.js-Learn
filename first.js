const { createDiffieHellmanGroup } = require('crypto')
const fs = require('fs')
const fil2 = require('./fil2.js')
fs.appendFileSync('notes.txt','\n /n oioi')
console.log("begin")
const oi = fil2.cool

const command = process.argv[2]

if (command == 'add') {
    console.log("adding note")
}
else if (command == 'add') {
    console.log("deleting note")
}