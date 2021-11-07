import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LoadingButton from '@mui/lab/LoadingButton';
import React, { useCallback, useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import SaveIcon from '@mui/icons-material/Save';
import { AppRootStateType } from '../../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { adressType } from '../../../api/api';
import { getFooterTC, updateAdress } from '../../../store/footer-reduser';
import { ContactInfo } from './ContactInfo';
import { ContactInfoEdit } from './ContactInfoEdit';

export const Contact = () => {
  const [edit, setedit] = useState<boolean>(false);
  const contact = useSelector<AppRootStateType, adressType>(state => state.footer);
  const [name, setName] = useState<string>('');
  const [street, setStreet] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [paypalme, setPaypalme] = useState<string>('');
  const [text, setText] = useState<string>('');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFooterTC());
  }, [dispatch]);

  const nameHandleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    },
    [setName]
  );

  const streetHandleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setStreet(event.target.value);
    },
    [setStreet]
  );

  const cityMeHandleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCity(event.target.value);
    },
    [setCity]
  );

  const mobileHandleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setMobile(event.target.value);
    },
    [setMobile]
  );

  const emailHandleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );

  const paypalmeHandleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPaypalme(event.target.value);
    },
    [setPaypalme]
  );

  const textHandleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
    },
    [setText]
  );

  const openEditHandler = () => {
    if (!edit) {
      setedit(true);
      setName(contact.name);
      setStreet(contact.street);
      setCity(contact.city);
      setMobile(contact.mobile);
      setEmail(contact.email);
      setPaypalme(contact.paypalme);
      setText(contact.text);
    } else {
      setedit(false);
    }
  };
  const onUpdateHandler = () => {
    dispatch(updateAdress(name, street, city, mobile, email, paypalme, text));
    setedit(false);
  };

  return (
    <>
      <Header type={'contact'} />

      <Grid item className="blog">
        <Paper elevation={5} className="blog__paper">
          <ContactInfo
            name={contact.name}
            city={contact.city}
            street={contact.street}
            mobile={contact.mobile}
            email={contact.email}
            text={contact.text}
            paypalme={contact.paypalme}
          />
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
                <ContactInfoEdit
                  name={name}
                  nameHandleChange={nameHandleChange}
                  street={street}
                  streetHandleChange={streetHandleChange}
                  city={city}
                  cityMeHandleChange={cityMeHandleChange}
                  mobile={mobile}
                  mobileHandleChange={mobileHandleChange}
                  email={email}
                  emailHandleChange={emailHandleChange}
                  paypalme={paypalme}
                  paypalmeHandleChange={paypalmeHandleChange}
                  text={text}
                  textHandleChange={textHandleChange}
                />

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
