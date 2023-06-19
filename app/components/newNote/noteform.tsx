import { Button, TextField} from '@mui/material';
import { Form } from '@remix-run/react';

const NoteForm = () => {

  return (
    <div style={{ marginTop: 20, width: '100%' }}>
      <Form method='post' style={{display: 'flex', flexDirection: 'column'}} >
        <TextField
          label='Title'
          name='title'
        />
        <TextField
          label='Content'
          name='content'
          multiline
          minRows={1}
          maxRows={3}
          sx={{ marginY: 4 }}
        />
        <Button type='submit' variant='contained'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default NoteForm;
