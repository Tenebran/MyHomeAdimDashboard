import { Dispatch } from 'redux';
import { getProfile } from '../api/api';

const initialState: ProfileType = {
  name: '',
  surname: '',
  profession: '',
  image: '',
  aboutme: '',
  video: '',
};

export const profileReducers = (
  profile: ProfileType = initialState,
  action: ActionTypeProfile
): ProfileType => {
  switch (action.type) {
    case 'PROFILE/GET_DATA':
      return {
        ...profile,
        name: action.name,
        surname: action.surname,
        profession: action.profession,
        image: action.image,
        aboutme: action.aboutme,
        video: action.video,
      };

    default:
      return profile;
  }
};

const profileDataAC = (
  name: string,
  surname: string,
  profession: string,
  image: string,
  video: string,
  aboutme: string
) => {
  return { type: 'PROFILE/GET_DATA', name, surname, profession, image, video, aboutme } as const;
};

export const getProfileDataTC = (): any => (dispatch: Dispatch) => {
  return getProfile.profile().then(res => {
    const profile = res.data[0];

    dispatch(
      profileDataAC(
        profile.name,
        profile.surname,
        profile.profession,
        profile.image,
        profile.video,
        profile.aboutme
      )
    );
  });
};

export const updateProfileTC =
  (
    name: string,
    surname: string,
    aboutme: string,
    video: string,
    profession: string,
    image: string
  ) =>
  (dispatch: Dispatch) => {
    getProfile.updateProfil(name, surname, aboutme, video, profession, image).then(res => {
      dispatch(getProfileDataTC());
    });
  };

export type ProfileType = {
  name: string;
  surname: string;
  profession: string;
  image: string;
  aboutme: string;
  video: string;
};

export type ActionTypeProfile = ReturnType<typeof profileDataAC>;
