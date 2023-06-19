import { Box, Button, TextField, Divider } from '@mui/material';
import { Form } from '@remix-run/react';
import { useFormik } from 'formik';

const NoteForm = () => {
  const initialValues = {
    title: '',
    content: '',
  };

  function onSubmit(values: any) {
    console.log(values);
    formik.setSubmitting(false)
  }

  const formik = useFormik({
    initialValues,
    onSubmit
  })

//   console.log(formik.values)

  return (
    <div style={{ marginTop: 20, width: '100%' }}>
      <Form method='post' onSubmit={formik.handleSubmit} style={{display: 'flex', flexDirection: 'column'}} >
        <TextField
          onChange={formik.handleChange}
          value={formik.values.title}
          label='Title'
          name='title'
        />
        <TextField
          onChange={formik.handleChange}
          value={formik.values.content}
          label='Content'
          name='content'
          multiline
          minRows={1}
          maxRows={3}
          sx={{ marginY: 4 }}
        />
        <Button type='submit' variant='contained' disabled={formik.isSubmitting}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default NoteForm;
