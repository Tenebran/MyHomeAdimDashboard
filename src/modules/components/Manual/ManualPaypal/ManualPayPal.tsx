import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import './ManualPayPal.scss';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import PayPal_1 from '../../../common/image/paypal/PayPal_1.jpg';
import PayPal_2 from '../../../common/image/paypal/PayPal_2.jpg';
import PayPal_3 from '../../../common/image/paypal/PayPal_3.jpg';
import PayPal_4 from '../../../common/image/paypal/PayPal_4.jpg';
import { Header } from '../../Header';
import { Link } from 'react-router-dom';
import { PATH } from '../../../routes/Routes';
import Button from '@material-ui/core/Button';

export const ManualPayPal = () => {
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
              Go To
              <a
                className="manualPaypal__link"
                target="_blank"
                href="https://www.paypal.com/merchantapps/appcenter/acceptpayments/paypalme?locale.x=de_AT&country.x=AT"
              >
                <TouchAppIcon /> PayPal.me <TouchAppIcon />
              </a>
              <div>
                <img className="manualPaypal__image" src={PayPal_1} />
              </div>
            </Typography>

            <Typography className="manual__typography">
              Login
              <div>
                <img className="manualPaypal__image" src={PayPal_3} />
              </div>
            </Typography>
            <Typography className="manual__typography">
              And Copy Link
              <div>
                <img className="manualPaypal__image" src={PayPal_2} />
              </div>
            </Typography>
            <Typography className="manual__typography">
              This Link you must to insert into the field in Contact "PayPalMe" and click the save
              button
              <div>
                <img className="manualPaypal__image" src={PayPal_4} />
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
