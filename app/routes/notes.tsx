import { Container} from "@mui/material";

import NewNote, {links as newNoteLinks} from "~/components/new note";

export default function NotesPage(){
    return (
        <Container sx={{marginY: 10}} >
            <NewNote />
            
        </Container>
    )
}

export function links(){
    return [...newNoteLinks()]
}
