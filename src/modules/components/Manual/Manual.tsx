import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import { PATH } from '../../routes/Routes';
import { Header } from '../Header';
import './Manual.scss';

export const Manual = () => {
  return (
    <>
      <Header type="manual" />
      <div className="manual">
        <Grid item className="blog">
          <Paper elevation={5} className="manual__paper">
            <Typography className="manual__typography">
              <Link to={PATH.MANUAL_PROFILE} className="manual__link">
                Manual-Profile
              </Link>
            </Typography>
            <Typography className="manual__typography">
              <Link to={PATH.MANUAL_BLOG} className="manual__link">
                Manual-Blog
              </Link>
            </Typography>
            <Typography className="manual__typography">
              <Link to={PATH.MANUAL_SHOP} className="manual__link">
                Manual-Shop
              </Link>
            </Typography>
            <Typography className="manual__typography">
              <Link to={PATH.MANUAL_PAYPAL} className="manual__link">
                Manual-PayPal
              </Link>
            </Typography>{' '}
            <Typography className="manual__typography">
              <Link to={PATH.MANUAL_IMAGE_ADD} className="manual__link">
                Manual-Image_Add
              </Link>
            </Typography>
          </Paper>
        </Grid>
      </div>
    </>
  );
};
