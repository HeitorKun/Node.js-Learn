
const yargs = require('yargs')
const notes = require('./notes.js')
console.log("begin")

const getNotesFunc = notes.getNotes
const addNotesFunc = notes.addNote

yargs.version('1.1.0')
yargs.command({
    command: 'add',
    description: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv){
        addNotesFunc(argv.title, argv.body)
    }
})
yargs.argv