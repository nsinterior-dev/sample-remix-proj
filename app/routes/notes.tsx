import { ArrowBack } from "@mui/icons-material";
import { Container, Typography } from "@mui/material";
import { Link } from "@remix-run/react";

export default function NotesPage(){
    return (
        <Container sx={{marginY: 10}} >
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} >
                <Link to="/" style={{color: '#011e3c'}} ><ArrowBack /></Link>
                <Typography sx={{marginLeft: 2}} variant="h3">My Notes</Typography>
            </div>
            
        </Container>
    )
}
