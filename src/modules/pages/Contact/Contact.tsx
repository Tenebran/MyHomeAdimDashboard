import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LoadingButton from '@mui/lab/LoadingButton';
import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import SaveIcon from '@mui/icons-material/Save';
import { AppRootStateType } from '../../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { adressType } from '../../../api/api';
import { getFooterTC, updateAdress } from '../../../store/footer-reduser';

export const Contact = () => {
  const [edit, setedit] = useState<boolean>(false);
  const contact = useSelector<AppRootStateType, adressType>(state => state.footer);
  const [name, setName] = useState<string>('');
  const [street, setStreet] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFooterTC());
  }, [dispatch]);

  const nameHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const streetHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStreet(event.target.value);
  };
  const cityMeHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };
  const mobileHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMobile(event.target.value);
  };
  const emailHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const openEditHandler = () => {
    if (!edit) {
      setedit(true);
      setName(contact.name);
      setStreet(contact.street);
      setCity(contact.city);
      setMobile(contact.mobile);
      setEmail(contact.email);
    } else {
      setedit(false);
    }
  };

  const onUpdateHandler = () => {
    dispatch(updateAdress(name, street, city, mobile, email));
    setedit(false);
  };

  return (
    <>
      <Header type={'profile'} />

      <Grid item className="blog">
        <Paper elevation={5} className="blog__paper">
          <span className="blog__title">Name: </span>
          {contact.name}
          <div>
            <span className="blog__title">Street: </span>
            {contact.street}
          </div>
          <div>
            <span className="blog__title">City: </span>
            {contact.city}
          </div>
          <div>
            <div className="wrapper__info">
              <span>
                <span className="blog__title">Tel: </span>
                {contact.mobile}
              </span>
            </div>
            <div className="wrapper__info">
              <span>
                <span className="blog__title">Email: </span>
                {contact.email}
              </span>
            </div>
          </div>
          <div className="blog__button_edit">
            {!edit ? (
              <div className="blog__button-wrapper">
                <Button variant="contained" color="primary" onClick={openEditHandler}>
                  Edit
                </Button>
              </div>
            ) : (
              ''
            )}

            {edit ? (
              <>
                <div className="blog__editplace">
                  <TextField
                    id="standard-basic"
                    label="Name"
                    variant="filled"
                    value={name}
                    multiline
                    fullWidth
                    onChange={nameHandleChange}
                  />
                  <TextField
                    id="standard-basic"
                    label="Street"
                    variant="filled"
                    value={street}
                    multiline
                    fullWidth
                    onChange={streetHandleChange}
                  />
                  <TextField
                    id="outlined-multiline-static"
                    label="City"
                    variant="filled"
                    multiline
                    fullWidth
                    value={city}
                    onChange={cityMeHandleChange}
                  />
                  <TextField
                    id="standard-basic"
                    label="Tel"
                    variant="filled"
                    multiline
                    fullWidth
                    value={mobile}
                    onChange={mobileHandleChange}
                  />
                  <TextField
                    id="standard-basic"
                    label="Email"
                    variant="filled"
                    multiline
                    fullWidth
                    value={email}
                    onChange={emailHandleChange}
                  />
                </div>
                <div className="blog__button-wrapper">
                  <Button variant="contained" color="secondary" onClick={openEditHandler}>
                    Cancel
                  </Button>
                  <LoadingButton
                    color="secondary"
                    onClick={onUpdateHandler}
                    loadingPosition="start"
                    startIcon={<SaveIcon />}
                    variant="contained"
                  >
                    Save
                  </LoadingButton>
                </div>
              </>
            ) : (
              ''
            )}
          </div>
        </Paper>
      </Grid>
    </>
  );
};
