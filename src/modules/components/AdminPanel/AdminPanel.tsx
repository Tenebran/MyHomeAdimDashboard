import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import './AdminPanel.scss';

export const AdminPanel = (props: AdminPanelPropsType) => {
  const [inputPassword, setInputPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const passwordHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputPassword(event.target.value);
  };

  const onClickPasswordLogin = () => {
    console.log('Hier');
    console.log(inputPassword);
    props.onClickPasswordLogin(inputPassword);
  };

  return (
    <>
      <div className="AdminPanel">
        <div className="AdminPanel__wrapper">
          <div className="AdminPanel__title">
            <span className="AdminPanel__subtitle">Admin</span>Panel
          </div>
          <div className="AdminPanel__textField">
            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
              type="password"
              onChange={passwordHandleChange}
            />
          </div>
          <div>
            <Button variant="contained" color="primary" onClick={onClickPasswordLogin}>
              Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

type AdminPanelPropsType = {
  onClickPasswordLogin: (value: string) => void;
  password: string;
};
