const express = require('express')
const pool = require('./db')
const app = express()

app.use(express.json())

//create
app.post("/note", async (req, res) => {
    try{
        const {title, content} = req.body;
        const newNote = await pool.query("INSERT INTO note_table(title,content) VALUES($1, $2) RETURNING *", [title, content])
        return res.json(newNote.rows[0])
    }
    catch(e){
        console.log(e.message)
    }
})

//read notes

app.get("/note", async(req,res) => {
    try{
        const allNotes = await pool.query("SELECT * FROM note_table")
        return res.json(allNotes.rows)
    }
    catch(e){
        console.log(e.message)
    }
})

//read note

app.get("/note/:id", async(req,res) => {
    try{
        const { id } = req.params;
        const note = await pool.query("SELECT * FROM note_table WHERE id = $1", [id])
        return res.json(note.rows[0])
    }
    catch(e){
        console.log(e.message)
    }
})

//update
app.put("/note/:id", async(req, res) => {
    try{
        const { id } = req.params;
        const {title, content} = req.body;
        const note = await pool.query("UPDATE note_table SET title = $1, content = $2 WHERE id = $3", [title, content, id])
        return res.json(note.rows[0])
    }
    catch(e){
        console.log(e.message)
    }
})
//delete
app.delete("/note/:id", async(req, res) => {
    try{
        const { id } = req.params;
        const note = await pool.query("DELETE FROM note_table WHERE id = $1", [id])
        return res.json(note.rows[0])
    }
    catch(e){
        console.log(e.message)
    }
})

app.listen(4320, () => {
    console.log(`server running on port 4320`)
})