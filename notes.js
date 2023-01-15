const fs = require('fs')
const chalk = require('chalk')

const getNotes = function() {
    console.log("getNotes")
    return
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
    deleteNote: deleteNote
}