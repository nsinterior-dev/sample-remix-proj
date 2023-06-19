const NotesPool = require('pg').Pool;

const notesPool = new NotesPool({
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: 'postgres',
    database: 'postgres'
})

module.exports = notesPool.connect()