import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LoadingButton from '@mui/lab/LoadingButton';
import React, { useCallback, useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import SaveIcon from '@mui/icons-material/Save';
import { AppRootStateType } from '../../../store/store';
import { getProfileDataTC, ProfileType, updateProfileTC } from '../../../store/profile-reducers';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { ProfileInfoEdit } from './ProfileInfoEdit/ProfileInfoEdit';

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

  const nameHandleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    },
    [setName]
  );

  const surnameHandleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSurname(event.target.value);
    },
    [setSurname]
  );

  const aboutMeHandleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setAboutMe(event.target.value);
    },
    [setAboutMe]
  );
  const videoHandleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setvideo(event.target.value);
    },
    [setvideo]
  );

  const professionHandleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setProfession(event.target.value);
    },
    [setProfession]
  );

  const imageHandleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setImage(event.target.value);
    },
    [setImage]
  );

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

      <Grid item className="blog" style={{ zIndex: 2000 }}>
        <Paper elevation={5} className="blog__paper" style={{ zIndex: 2000 }}>
          <ProfileInfo
            image={profile.image}
            profession={profile.profession}
            name={profile.name}
            surname={profile.surname}
            aboutme={profile.aboutme}
            video={profile.video}
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
                <ProfileInfoEdit
                  image={image}
                  imageHandleChange={imageHandleChange}
                  profession={profession}
                  professionHandleChange={professionHandleChange}
                  name={name}
                  nameHandleChange={nameHandleChange}
                  surname={surname}
                  surnameHandleChange={surnameHandleChange}
                  aboutMe={aboutMe}
                  aboutMeHandleChange={aboutMeHandleChange}
                  video={video}
                  videoHandleChange={videoHandleChange}
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
