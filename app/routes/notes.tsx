import { Box, Container, Divider, Typography } from '@mui/material';
import { useLoaderData, useActionData } from '@remix-run/react';

import NoteForm from '~/components/newNote/noteform';
import NoteList from '~/components/newNote/notelist';

import styles from '~/components/newNote/index.css'

import { getNotes, createNote } from '~/api/index';
import { json, type ActionArgs } from '@remix-run/node';

export default function NotesPage() {
  const data = useLoaderData();
  const newData = useActionData()

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
        <NoteForm />
        <NoteList data={data} />
      </Box>
    </Container>
  );
}

export async function loader() {
  const data = await getNotes();
  return data || null;
}

export async function action({request}: ActionArgs) {
 const form = await request.formData()
 const title = form.get('title')
 const content = form.get('content')

 const fields = {title, content}
 console.log(fields)

 await createNote({ title, content})

 return json({fields})
}

export function links() {
    return [{
        rel: 'stylesheet',
        href: styles
    }];
}
