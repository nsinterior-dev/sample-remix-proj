import { Container} from "@mui/material";
import { useLoaderData } from "@remix-run/react";

import NewNote, {links as newNoteLinks} from "~/components/new note";

export default function NotesPage(){
    const data = useLoaderData()
    
    return (
        <Container sx={{marginY: 10}} >
            <NewNote notes={data} />
        </Container>
    )
}


export async function loader(){
    console.log(process.env.SOME_SECRET)
    return [
        {
            title: "hello there",
            content: "wish u a merry christmas"
        },
        {
            title: "hello sdasdthere",
            content: "wish sadsadu a merry christmas"
        },
    ]
}

export function links(){
    return [...newNoteLinks()]
}
