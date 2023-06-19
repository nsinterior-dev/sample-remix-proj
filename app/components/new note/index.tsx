import { Box, Container, Divider, Typography } from '@mui/material';

import styles from './index.css'
import NoteForm from './noteform';
import ShowNotes from './shownotes';

const NewNote = (props) => {
  const {
    notes
  } = props
  return (
    <Container sx={{marginTop: 15}}>
      <div>
        <Typography className='title' variant='h3'>
            My Notes
        </Typography>
        <Divider className='divider' />
      </div>
      <Box sx={{display: 'flex', flexDirection: 'row', padding: 2, marginTop: 2}} >
        <NoteForm />
        <ShowNotes isEmpty={notes} />
      </Box>
     
    </Container>
  );
};

export default NewNote;

export function links (){
    return [{
        rel: 'stylesheet',
        href: styles
    }];
}