const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes.js')
//const { argv } = require('yargs')


//working with yargs.command ../ /
//console.log(process.argv)
//console.log(yargs.argv)
yargs.version('1.1.0')

yargs.command({
    command : 'add',
    describe : 'Add Title and Body for a note to be added ',
    builder : {
        title : {
            describe : 'Please provide title',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'Please provide body of the note...',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})


// remove a note

yargs.command({
    command : 'remove',
    describe : 'remove a note!',
    builder : {
        title : {
            describe : 'removing a note',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

// read a note

yargs.command({
    command : 'read',
    describe : 'read notes from list...',
    handler(argv){
        console.log('Reading a note!..')
    }
})


// list notes

yargs.command({
    command : 'list',
    describe : 'list the notes',
    handler(){
        notes.listNotes()
    }
})

yargs.parse()
//console.log(yargs.argv)