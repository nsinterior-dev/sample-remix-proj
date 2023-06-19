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
import type { Key } from 'react';

interface noteCard {
  title: string;
  content: string;
  onUpdate: any;
  onDelete: any;
}

interface displayNotes {
  data: any;
}

const NoteCard = (props: noteCard) => {
  const { title, content, onUpdate, onDelete } = props;
  return (
    <Card>
      <CardContent>
        <ListItemText 
          primary={title}
          secondary={content}
        />
      </CardContent>
      <CardActions>
        <IconButton onClick={onUpdate}>
          <Edit />
        </IconButton>
        <IconButton onClick={onDelete}>
          <Delete />
        </IconButton>
      </CardActions>
    </Card>
  );
};

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

  console.log(data);
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
      <Box sx={{ display: 'flex', alignItems: 'start', paddingY: 2.5 , width: '100%'}}>
        {data && !data.length ? (
          <NoteEmpty />
        ) : (
          <Grid container width={'100%'}  spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            { data && data.map(
              (
                note: { title: string; content: string },
                key: Key | null | undefined
              ) => (
                <Grid key={key} item xs={2} sm={4} md={4} >
                  <NoteCard
                    title={note.title}
                    content={note.content}
                    onUpdate={() => {}}
                    onDelete={() => {}}
                  />
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
