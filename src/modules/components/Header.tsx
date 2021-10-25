import Box from '@material-ui/core/Box/Box';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import './Header.scss';

export const Header = () => {
  return (
    <Box className="header">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Profile
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blog
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shop
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Contact
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
