import Box from '@material-ui/core/Box/Box';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { PATH } from '../routes/Routes';

export const Header = (props: HeaderPropsType) => {
  return (
    <Box className="header">
      <AppBar position="fixed">
        <Toolbar className="header__container">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              to={PATH.MAIN}
              className={props.type === 'profile' ? 'header__link_active' : 'header__link'}
            >
              Profile
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              to={PATH.BLOG}
              className={props.type === 'blog' ? 'header__link_active' : 'header__link'}
            >
              Blog
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              to={PATH.SHOP}
              className={props.type === 'shop' ? 'header__link_active' : 'header__link'}
            >
              Shop
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              to={PATH.IMPRESSUM}
              className={props.type === 'contact' ? 'header__link_active' : 'header__link'}
            >
              Contact
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

type HeaderPropsType = {
  type: string;
};
