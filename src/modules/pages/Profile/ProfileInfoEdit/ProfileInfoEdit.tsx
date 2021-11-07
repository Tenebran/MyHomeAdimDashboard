import TextField from '@material-ui/core/TextField';
import React from 'react';

export const ProfileInfoEdit = (props: ProfileInfoEditPropsType) => {
  return (
    <div className="blog__editplace">
      <TextField
        id="standard-basic"
        label="image"
        variant="filled"
        value={props.image}
        multiline
        fullWidth
        onChange={props.imageHandleChange}
      />
      <TextField
        id="standard-basic"
        label="Live String"
        variant="filled"
        value={props.profession}
        multiline
        fullWidth
        onChange={props.professionHandleChange}
      />

      <TextField
        id="standard-basic"
        label="name"
        variant="filled"
        value={props.name}
        multiline
        fullWidth
        onChange={props.nameHandleChange}
      />
      <TextField
        id="outlined-multiline-static"
        label="surname"
        variant="filled"
        multiline
        fullWidth
        value={props.surname}
        onChange={props.surnameHandleChange}
      />
      <TextField
        id="standard-basic"
        label="aboutMe"
        variant="filled"
        multiline
        fullWidth
        value={props.aboutMe}
        onChange={props.aboutMeHandleChange}
      />
      <TextField
        id="standard-basic"
        label="video"
        variant="filled"
        multiline
        fullWidth
        value={props.video}
        onChange={props.videoHandleChange}
      />
    </div>
  );
};

type ProfileInfoEditPropsType = {
  video: string;
  aboutMe: string;
  videoHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  aboutMeHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  surname: string;
  surnameHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  nameHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  profession: string;
  professionHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  image: string;
  imageHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
