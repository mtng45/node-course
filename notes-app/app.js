const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
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
  handler(argv) {
    notes.addNotes(argv.title, argv.body)
  }
})

// Create remove command
// コマンドの設定
yargs.command({
  command: 'remove',
  describe: 'Remive a note',
  builder: { // それ自体がオブジェクトであるビルダープロパティをここで指定して、サポートしたいオプションをリストアップできる。
    title: {
      describe: 'Note title',
      demandOption: true, // 必須に設定
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title)
  }
})

// Create list command
yargs.command({
  command: 'list',
  describe: 'list your notes',
  handler() {
    console.log('Listing out all notes')
  }
})

// Create list command
yargs.command({
  command: 'read',
  describe: 'read a note',
  handler() {
    console.log('Reading a note')
  }
})

yargs.parse()
