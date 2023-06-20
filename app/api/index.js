import { fetch } from "@remix-run/node";


const allNotes = 'note';
const note = 'note';
const host = "localhost:4320"

export async function getNotes (){
    try{
        const response = await fetch(`http://${host}/${allNotes}`, {
            method: 'GET',
            headers:{
                "Content-Type":"application/json"
            },
        })
        return response.json();
    }
    catch(e){
        console.log(e.message)
    }
}

export async function getNote (id){
    try{
        const response = await fetch(`http://${host}/${note}/${id}`, {
            method: 'GET',
            headers:{
                "Content-Type":"application/json"
            },
        })
        return response.json();
    }
    catch(e){
        console.log(e.message)
    }
}

export async function createNote (body){
    try{
        const response = await fetch(`http://${host}/${note}`, {
            method: 'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(body)
        });
        console.log(JSON.stringify(body))
        return response.json();
    }
    catch(e){
        console.log(e.message)
    }
}

export async function updateNote (id){
    try{
        const response = await fetch(`http://${host}/${note}/${id}`, {
            method: 'PUT'
        })
        return response.json();
    }
    catch(e){
        console.log(e.message)
    }
}

export async function deleteNote (id){
    try{
        const response = await fetch(`http://${host}/${note}/${id}`, {
            method: 'DELETE',
            headers:{
                "Content-Type":"application/json"
            },
        })
        return response.json();
    }
    catch(e){
        console.log(e.message)
    }
}