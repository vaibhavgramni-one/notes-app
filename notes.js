const chalk = require('chalk')
const fs = require('fs')

const getNotes = () => {
    return loadNotes()
}

const loadNotes = () => {
    try
    {
        const notesBuffer = fs.readFileSync('notes-json.json')
        const notes = JSON.parse(notesBuffer.toString())
        return notes
    }
    catch(e)
    {
        return []
    }
}

const listNotes = () => {
    const allNotes = loadNotes()
    console.log(chalk.white.inverse('Listing all Notes with their Title'))
    allNotes.forEach((note) => {
        console.log(chalk.green.inverse(note.title))
    })
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes-json.json' , JSON.stringify(notes))
}

const addNote = (title , body) => {
    
    const notes = loadNotes()

    const filterNote = notes.filter((note) => note.title === title )

    if(filterNote.length === 0)
    {
        notes.push({
        title : title,
        body : body
        })
        console.log(chalk.green.inverse('Note Added!'))
    }
    else{
        //console.log('Note [title] : ' + title + ' (Already taken, choose another one).')
        console.log(chalk.red.inverse('Note taken!'))
    }
    

    saveNotes(notes)
}

const removeNote = (title) => {
    const notes = loadNotes()

    const noteToRemove = notes.filter((note) => note.title === title)

    if(noteToRemove.length === 0)
    {
        console.log(chalk.red.inverse('No note found!'))
        //console.log(`Note with title : ${title} doesn't exist. Try some another title`)
    }
    else{
        // 1 way of doing it ..//
        // const indexOfEl = notes.indexOf(noteToRemove[0])
        // notes.splice(indexOfEl , 1)

        // 2nd way of doint it ..//
        const newNotes = notes.filter((note) => note.title !== title)
        console.log(chalk.green.inverse('Note removed!'))
        //console.log(`Note with title : ${title} is removed.`)
        saveNotes(newNotes)
    }
}


module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNote : removeNote,
    listNotes : listNotes
}