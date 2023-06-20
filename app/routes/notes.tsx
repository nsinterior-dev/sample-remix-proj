import { Box, Container, Divider, Typography } from '@mui/material';
import { useLoaderData, useNavigation } from '@remix-run/react';

import NoteForm from '~/components/newNote/noteform';
import NoteList from '~/components/newNote/notelist';

import styles from '~/components/newNote/index.css'

import { getNotes, createNote, deleteNote } from '~/api/index';
import { json, type ActionArgs } from '@remix-run/node';

export default function NotesPage() {
  const data = useLoaderData();
  const navigate = useNavigation()
  

  const isSubmitting = navigate.state ==="submitting"

  return (
    <Container sx={{ marginTop: 15 }}>
      <div>
        <Typography className='title' variant='h3'>
          My Notes
        </Typography>
        <Divider className='divider' />
      </div>
      <Box
        sx={{ display: 'flex', flexDirection: 'row', padding: 2, marginTop: 2 }}
      >
        <NoteForm isSubmitting={isSubmitting} />
        <NoteList data={data} />
      </Box>
    </Container>
  );
}

export async function loader() {
  const data = await getNotes();
  return data || null;
}

export async function action({request, params}: ActionArgs) {
 const form = await request.formData()
 const title = form.get('title')
 const content = form.get('content')

 if(title !== null && content !== null){
   await createNote({ title, content})
 }

 return json({message: 'ok'})

}

export function links() {
    return [{
        rel: 'stylesheet',
        href: styles
    },];
}
