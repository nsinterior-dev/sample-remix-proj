import { Container, Divider, Typography } from '@mui/material';

import styles from './index.css'
import NoteForm from './noteform';

const NewNote = () => {
  return (
    <Container className='wrapper'>
      <div>
        <Typography className='title' variant='h3'>
            My Notes
        </Typography>
        <Divider className='divider' />
      </div>
      
      <NoteForm />
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