import { Button, TextField} from '@mui/material';
import { Form } from '@remix-run/react';
import { useEffect, useRef } from 'react';

const NoteForm = (props: any) => {

  const {
    isSubmitting
  } = props

  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if(!isSubmitting){
      formRef.current?.reset()
    }
    return
  }, [isSubmitting])

  return (
    <div style={{ marginTop: 20, width: '100%' }}>
      <Form ref={formRef} method='post' style={{display: 'flex', flexDirection: 'column'}} >
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
        <Button type='submit' variant='contained' disabled={isSubmitting} >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default NoteForm;
