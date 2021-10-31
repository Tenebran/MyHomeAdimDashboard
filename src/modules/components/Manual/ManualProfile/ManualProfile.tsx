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
import Profile from '../../../common/image/profile/profile_1.jpg';
import Profile_2 from '../../../common/image/profile/profile_2.jpg';
import Profile_3 from '../../../common/image/profile/Profile_3.jpg';

export const ManualProfile = () => {
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
              <div className="manualPaypal__image-wrapper">
                <img className="manualPaypal__image" alt="profile" src={Profile} />
              </div>
              <div>
                <img className="manualPaypal__image" alt="profile" src={Profile_2} />
              </div>
              <div>
                <img className="manualPaypal__image" alt="profile" src={Profile_3} />
              </div>
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
