import { Box, Button, TextField, Divider } from '@mui/material'
import { Formik } from 'formik'
import React from 'react'

const NoteForm = () => {
  return (
    <div style={{marginTop: 20, width: '100%'}}>
        <Formik
        initialValues={{
            title: '',
            content: ''
        }}
        onSubmit={() => {

        }}
        >
            {
                ({isSubmitting}) => (
                    <Box sx={{display: 'flex', flexDirection: 'column'}} >
                        <TextField label="Title" name="title" />
                        <TextField label='Content' name='content' multiline minRows={1} maxRows={3} sx={{marginY: 4}} />
                        <Button variant='contained' disabled={isSubmitting}>
                            Submit
                        </Button>
                    </Box>
                )
            }

        </Formik>
        
    </div>
  )
}

export default NoteForm