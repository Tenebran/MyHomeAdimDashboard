import { Paper, Typography, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Alert, AlertTitle } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { PATH } from '../../../routes/Routes';
import { Header } from '../../Header';
import shop_1 from '../../../common/image/shop/shop_1.jpg';
import shop_2 from '../../../common/image/shop/shop_2.jpg';
import shop_3 from '../../../common/image/shop/shop_3.jpg';

export const ManualShop = () => {
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
                The maximum number of items in a shope is exactly 100
              </Alert>
            </Typography>

            <Typography className="manual__typography">
              <div>
                <img className="manualPaypal__image" src={shop_1} />
              </div>
            </Typography>
            <Typography className="manual__typography">
              <div>
                <img className="manualPaypal__image" src={shop_2} />
              </div>
            </Typography>
            <Typography className="manual__typography">
              <Alert severity="warning">
                <AlertTitle>Warning</AlertTitle>
                PayPal button Configured in Contact to learn more
                <Link to={PATH.MANUAL_PAYPAL} className="manual__link">
                  <Button variant="contained" color="secondary">
                    <strong>Press here </strong>
                  </Button>
                </Link>
              </Alert>
              <div>
                <img className="manualPaypal__image" src={shop_3} />
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
