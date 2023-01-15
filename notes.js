const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    const notes = loadNotes()
    if (notes.length === 0) {
        console.log(chalk.blue.inverse('there are no notes'))
        return
    }
    notes.forEach(element => {
        console.log(chalk.blackBright('title: ' + element.title) + chalk.blue(' body: ' + element.body))
    });

    return
}

const readNote = function readNote(title) {
    const notes = loadNotes()
    for (let index = 0; index < notes.length; index++) {
        const note = notes[index];
        if (note.title === title) {
            console.log(chalk.blue(note.body))
            return
        }
    }
    console.log(chalk.red.inverse('there are no notes with this title'))
}

const addNote = function(title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title == title        
    })
    if (duplicateNotes.length == 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
    } else {
        console.log('title taken')
    }

}
const deleteNote = function(title) {
    const notes = loadNotes()
    const newNotes = notes.filter(function (note) {
        return note.title !== title        
    })
    
    if (newNotes.length != notes.length) {
        saveNotes(newNotes)
        console.log(chalk.green.inverse('note deleted'))
    } else {
        console.log(chalk.red.inverse('note not found'))
    }
    
}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function() {
    try {const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    deleteNote: deleteNote,
    readNote: readNote
}