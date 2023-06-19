import { Delete, Edit } from '@mui/icons-material';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Divider,
  IconButton,
  Typography,
} from '@mui/material';

interface noteCard {
  title: string;
  content: string;
  onUpdate: any;
  onDelete: any;
}

interface displayNotes {
    isEmpty: boolean
  }

const NoteCard = (props: noteCard) => {
  const { 
    title, 
    content, 
    onUpdate,
    onDelete,
} = props;
  return (
    <Card sx={{ width: '250px' }}>
      <CardContent>
        <Typography variant='h5'>{title}</Typography>
        <Typography variant='body1'>{content}</Typography>
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

const ShowNotes = (props: displayNotes) => {
  const { isEmpty } = props;

  console.log(isEmpty);
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
      <Box sx={{display: 'flex', alignItems: 'start', paddingY: 2.5}} >
        {
            isEmpty ?
            <NoteEmpty /> :
            <NoteCard
            title='Title'
            content='Content'
            onUpdate={() => {}}
            onDelete={() => {}}
          />
        }
      </Box>
    </Box>
  );
};

export default ShowNotes;
