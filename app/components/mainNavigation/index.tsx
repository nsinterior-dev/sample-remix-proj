import { AppBar, Toolbar, Typography } from '@mui/material';
import { NavLink } from '@remix-run/react';

function MainNavigation() {
  return (
    <AppBar sx={{backgroundColor: 'navy'}} >
      <Toolbar className='toolbar' >
        <Typography>
          <NavLink className='nav-link' to='/'>
            Home
          </NavLink>
        </Typography>
        <Typography>
          <NavLink className='nav-link' to='/notes'>
            Notes
          </NavLink>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default MainNavigation;
