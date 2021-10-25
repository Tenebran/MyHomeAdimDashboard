import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LoadingButton from '@mui/lab/LoadingButton';
import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import SaveIcon from '@mui/icons-material/Save';
import { AppRootStateType } from '../../../store/store';
import { getProfileDataTC, ProfileType } from '../../../store/profile-reducers';
import { useDispatch, useSelector } from 'react-redux';

export const Profile = () => {
  const [edit, setedit] = useState<boolean>(false);
  const profile = useSelector<AppRootStateType, ProfileType>(state => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileDataTC());
  }, []);

  console.log(profile);
  const openEditHandler = () => {
    if (!edit) {
      setedit(true);
    } else {
      setedit(false);
    }
  };
  return (
    <>
      <Header type={'profile'} />

      <Grid item className="blog">
        <Paper elevation={5} className="blog__paper">
          <img src={profile.image} className="blog__image" />
          <div>
            <span className="blog__title">Name: </span>
            {profile.name}
          </div>
          <div>
            <div className="wrapper__info">
              <span>
                <span className="blog__title">Surname: </span>
                {profile.surname}
              </span>
            </div>
            <div className="wrapper__info">
              <span>
                <span className="blog__title">AboutMe: </span>
                {profile.aboutme}
              </span>
            </div>
            <div className="wrapper__info">
              <span>
                <span className="blog__title">Video: </span>
                <iframe
                  width="300"
                  height="220"
                  src={profile.video}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
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
                    label="image"
                    variant="filled"
                    // value={image}
                    multiline
                    fullWidth
                    // onChange={imageHandleChange}
                  />
                  <TextField
                    id="outlined-multiline-static"
                    label="title"
                    variant="filled"
                    multiline
                    fullWidth
                    // value={title}
                    // onChange={titleHandleChange}
                  />
                  <TextField
                    id="standard-basic"
                    label="subtitle"
                    variant="filled"
                    multiline
                    fullWidth
                    // value={subtitle}
                    // onChange={subTitleHandleChange}
                  />
                </div>
                <div className="blog__button-wrapper">
                  <Button variant="contained" color="secondary" onClick={openEditHandler}>
                    Cancel
                  </Button>
                  <LoadingButton
                    color="secondary"
                    // onClick={onUpdateHandler}
                    //   loading={loading}
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
