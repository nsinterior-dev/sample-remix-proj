import { Delete, Edit } from "@mui/icons-material"
import { Box, Card, CardActions, CardContent, Divider, IconButton, Typography } from "@mui/material"


const NoteCard = (props: { title: any; content: any; onUpdate: any; onDelete: any }) => {
    const {title, content, onUpdate, onDelete} = props
    return(
   <Card sx={{width: '400px'}} >
    <CardContent>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="body1">{content}</Typography>
    </CardContent>
    <CardActions>
        <IconButton onClick={onUpdate}><Edit /></IconButton>
        <IconButton onClick={onDelete}><Delete /></IconButton>
    </CardActions>
   </Card>
)}

const NoteEmpty = () => (
    <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems:'center'}}>
        <Typography>Empty notes, add one</Typography>
    </Box>
)

const ShowNotes = (props: { isEmpty?: true | false }) => {
    const {
        isEmpty = true,
    } = props
  return (
   <Box sx={{display: 'flex', alignItems: 'center', marginLeft: 4, width: '100%'}}>
        <Divider orientation="vertical" sx={{marginRight: 4}} />
        <Box>
           <NoteEmpty />
           <NoteCard title="Title" content="Content" onUpdate={() => {}} onDelete={() => {}} />
        </Box>
   </Box>
  )
}

export default ShowNotes