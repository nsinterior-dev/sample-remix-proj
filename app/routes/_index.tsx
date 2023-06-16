import type { V2_MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import { Button, Container, Typography } from '@mui/material';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <Container sx={{ marginY: 20, textAlign: 'center' }}>
      <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '100px'}} >
        <Typography variant='h3'>
          A better way of keeping track of your notes
        </Typography>
        <Typography variant='body1'>
          Try our early beta and never loose track of your notes again!
        </Typography>
      </Container>
      <Button variant='contained' sx={{marginY: 6, backgroundColor: 'navy'}} >
        <Link style={{ textDecoration: 'none', color: '#FFFF' }} to='/notes'>
          Try Now!
        </Link>
      </Button>
    </Container>
  );
}
