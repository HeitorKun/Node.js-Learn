
const yargs = require('yargs')
const notes = require('./notes.js')
console.log("begin")

const getNotesFunc = notes.getNotes
const addNotesFunc = notes.addNote
const deleteNoteFunc = notes.deleteNote
const readNoteFunc = notes.readNote

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

yargs.command({
    command: 'delete',
    description: 'delete a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv){
        deleteNoteFunc(argv.title)
    }
})

yargs.command({
    command: 'read',
    description: 'read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv){
        readNoteFunc(argv.title)
    }
})

yargs.command({
    command: 'list notes',
    description: 'list all notes',
    handler: function (){
        getNotesFunc()
    }
})


yargs.argv