import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import React from 'react';

export const ContactInfoEdit = (props: ContactInfoEditPropsType) => {
  return (
    <>
      <div className="blog__editplace">
        <TextField
          id="standard-basic"
          label="Name"
          variant="filled"
          value={props.name}
          multiline
          fullWidth
          onChange={props.nameHandleChange}
        />
        <TextField
          id="standard-basic"
          label="Street"
          variant="filled"
          value={props.street}
          multiline
          fullWidth
          onChange={props.streetHandleChange}
        />
        <TextField
          id="outlined-multiline-static"
          label="City"
          variant="filled"
          multiline
          fullWidth
          value={props.city}
          onChange={props.cityMeHandleChange}
        />
        <TextField
          id="standard-basic"
          label="Tel"
          variant="filled"
          multiline
          fullWidth
          value={props.mobile}
          onChange={props.mobileHandleChange}
        />
        <TextField
          id="standard-basic"
          label="Email"
          variant="filled"
          multiline
          fullWidth
          value={props.email}
          onChange={props.emailHandleChange}
        />
        <TextField
          id="standard-basic"
          label="PayPalMe"
          variant="filled"
          multiline
          fullWidth
          value={props.paypalme}
          onChange={props.paypalmeHandleChange}
        />
        <TextField
          id="standard-basic"
          label="Text"
          variant="filled"
          multiline
          fullWidth
          value={props.text}
          onChange={props.textHandleChange}
        />
      </div>
    </>
  );
};

type ContactInfoEditPropsType = {
  name: string;
  nameHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  street: string;
  streetHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  city: string;
  cityMeHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  mobile: string;
  mobileHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  email: string;
  paypalme: string;
  emailHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  paypalmeHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
  textHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
