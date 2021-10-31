import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import React from 'react';
import { Link } from 'react-router-dom';
import { PATH } from '../../../routes/Routes';
import { Header } from '../../Header';

export const ManualBlog = () => {
  return (
    <>
      <Header type="manual" />
      <div className="manualPaypal_">
        <Grid item className="blog">
          <Paper elevation={5} className="manual__paper">
            <Typography className="manual__typography">
              <Link to={PATH.MANUAL} className="manual__link">
                <Button variant="contained" color="secondary">
                  Go Back
                </Button>
              </Link>
            </Typography>
            <Typography className="manual__typography">
              <Alert severity="warning">
                <AlertTitle>Warning</AlertTitle>
                Upload Photo is only available via url
                <Link to={PATH.MANUAL_IMAGE_ADD} className="manual__link">
                  <Button variant="contained" color="secondary">
                    <strong>Press here </strong>
                  </Button>
                </Link>
              </Alert>
            </Typography>
            <Typography className="manual__typography">
              <Alert severity="warning">
                <AlertTitle>Warning</AlertTitle>
                The maximum number of blog posts is exactly 100 posts
              </Alert>
            </Typography>
            <Typography className="manual__typography">
              <Link to={PATH.MANUAL} className="manual__link">
                <Button variant="contained" color="secondary">
                  Go Back
                </Button>
              </Link>
            </Typography>
          </Paper>
        </Grid>
      </div>
    </>
  );
};
