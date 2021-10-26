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
import { getProfileDataTC, ProfileType, updateProfileTC } from '../../../store/profile-reducers';
import { useDispatch, useSelector } from 'react-redux';

export const Profile = () => {
  const [edit, setedit] = useState<boolean>(false);
  const profile = useSelector<AppRootStateType, ProfileType>(state => state.profile);
  const [name, setName] = useState<string>(profile.name);
  const [surname, setSurname] = useState<string>(profile.surname);
  const [aboutMe, setAboutMe] = useState<string>(profile.aboutme);
  const [video, setvideo] = useState<string>(profile.video);
  const [profession, setProfession] = useState(profile.profession);
  const [image, setImage] = useState<string>(profile.image);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileDataTC());
  }, [dispatch]);

  const nameHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const surnameHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(event.target.value);
  };
  const aboutMeHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAboutMe(event.target.value);
  };
  const videoHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setvideo(event.target.value);
  };
  const professionHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProfession(event.target.value);
  };

  const imageHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.value);
  };

  const openEditHandler = () => {
    if (!edit) {
      setedit(true);
      setName(profile.name);
      setSurname(profile.surname);
      setAboutMe(profile.aboutme);
      setvideo(profile.video);
      setProfession(profile.profession);
      setImage(profile.image);
    } else {
      setedit(false);
    }
  };

  const onUpdateHandler = () => {
    dispatch(updateProfileTC(name, surname, aboutMe, video, profession, image));
    setedit(false);
  };

  return (
    <>
      <Header type={'profile'} />

      <Grid item className="blog">
        <Paper elevation={5} className="blog__paper">
          <img src={profile.image} className="blog__image" />
          <div>
            <span className="blog__title">Live String: </span>
            {profile.profession}
          </div>
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
                    value={image}
                    multiline
                    fullWidth
                    onChange={imageHandleChange}
                  />
                  <TextField
                    id="standard-basic"
                    label="name"
                    variant="filled"
                    value={name}
                    multiline
                    fullWidth
                    onChange={nameHandleChange}
                  />
                  <TextField
                    id="outlined-multiline-static"
                    label="surname"
                    variant="filled"
                    multiline
                    fullWidth
                    value={surname}
                    onChange={surnameHandleChange}
                  />
                  <TextField
                    id="standard-basic"
                    label="aboutMe"
                    variant="filled"
                    multiline
                    fullWidth
                    value={aboutMe}
                    onChange={aboutMeHandleChange}
                  />
                  <TextField
                    id="standard-basic"
                    label="video"
                    variant="filled"
                    multiline
                    fullWidth
                    value={video}
                    onChange={videoHandleChange}
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
