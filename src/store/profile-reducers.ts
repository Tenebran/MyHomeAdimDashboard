import profileImage from '../modules/common/image/profile-image/profile-image.jpg';
import { Dispatch } from 'redux';
import { getProfile } from '../api/api';
import { profile } from 'console';

export type ProfileType = {
  name: string;
  surname: string;
  profession: string;
  image: string;
};

export type ActionTypeProfile = ReturnType<typeof profileDataAC>;

const initialState: ProfileType = {
  name: '',
  surname: '',
  profession: '',
  image: '',
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
      };

    default:
      return profile;
  }
};

const profileDataAC = (name: string, surname: string, profession: string, image: string) => {
  return { type: 'PROFILE/GET_DATA', name, surname, profession, image } as const;
};

export const getProfileDataTC = () => (dispatch: Dispatch) => {
  return getProfile.profile().then(res => {
    const profile = res.data[0];

    dispatch(profileDataAC(profile.name, profile.surname, profile.profession, profile.image));
  });
};
