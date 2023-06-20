import { Delete, Edit } from '@mui/icons-material';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  IconButton,
  ListItemText,
  Typography
} from '@mui/material';
import { Form } from '@remix-run/react';

interface displayNotes {
  data: any;
}

const NoteEmpty = () => (
  <Box
    sx={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Typography>Empty notes, add one</Typography>
  </Box>
);

const NoteList = (props: displayNotes) => {
  const { data } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'start',
        marginLeft: 4,
        width: '100%',
      }}
    >
      <Divider orientation='vertical' sx={{ marginRight: 4 }} />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'start',
          paddingY: 2.5,
          width: '100%',
        }}
      >
        {data && !data.length ? (
          <NoteEmpty />
        ) : (
          <Grid
            container
            width={'100%'}
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {data &&
              data.map(
                (note: { title: string; content: string; id: number }) => (
                  <Grid key={note.id} item xs={2} sm={4} md={4}>
                    <Form key={note.id}>
                      <Card>
                        <CardContent>
                          <ListItemText
                            primary={note.title}
                            secondary={note.content}
                          />
                        </CardContent>
                        <CardActions>
                          <IconButton>
                            <Edit />
                          </IconButton>
                          <button type='submit' value='delete' name='intent'>
                            <Delete />
                          </button>
                        </CardActions>
                      </Card>
                    </Form>
                  </Grid>
                )
              )}
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default NoteList;
