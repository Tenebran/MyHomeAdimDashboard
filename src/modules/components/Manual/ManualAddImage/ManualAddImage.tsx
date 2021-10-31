import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import { Header } from '../../Header';
import { PATH } from '../../../routes/Routes';
import addImage_1 from '../../../common/image/imageAdd/addImage_1.jpg';
import addImage_2 from '../../../common/image/imageAdd/addImage_2.jpg';
import addImage_3 from '../../../common/image/imageAdd/addImage_3.jpg';
import addImage_4 from '../../../common/image/imageAdd/addImage_4.jpg';

export const ManualAddImage = () => {
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
                rel="noreferrer"
                href="https://postimages.org/"
              >
                <TouchAppIcon /> postimages.org <TouchAppIcon />
              </a>
              <Typography className="manual__typography">
                Click on "Choose image" and choose your image
                <div>
                  <img className="manualPaypal__image" alt="paypal" src={addImage_1} />
                </div>
              </Typography>
            </Typography>
            <Typography className="manual__typography">
              Copy "Direct Link"
              <div>
                <img className="manualPaypal__image" alt="paypal" src={addImage_2} />
              </div>
            </Typography>
            <Typography className="manual__typography">
              And paste in the image field, then click save button
              <div>
                <img className="manualPaypal__image" alt="paypal" src={addImage_3} />
              </div>
            </Typography>
            <Typography className="manual__typography">
              Or you can paste any image from the Internet by copying the link to the image
              <div>
                <img className="manualPaypal__image" alt="paypal" src={addImage_4} />
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
