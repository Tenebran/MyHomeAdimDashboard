import { Dispatch } from 'redux';
import { getBlog } from '../api/api';

export const blogReducer = (
  state: BlogInitialStateType = initialState,
  action: ActionType
): BlogInitialStateType => {
  switch (action.type) {
    case 'BLOG/GET_BLOG':
      return { ...state, blog: action.blog };
    default:
      return state;
  }
};

type ActionType = ReturnType<typeof getBlogAC>;

export const getBlogAC = (blog: Array<BlogType>) => {
  return { type: 'BLOG/GET_BLOG', blog } as const;
};

export const getBlogTC = () => (dispatch: Dispatch) => {
  getBlog.blog().then(res => {
    dispatch(getBlogAC(res.data));
  });
};

export type BlogInitialStateType = typeof initialState;

export type BlogType = {
  createdAt: string;
  name: string;
  title: string;
  image: string;
  subtitle: string;
  id: string;
};

const initialState = {
  blog: [
    {
      createdAt: '',
      name: '',
      title: '',
      image: '',
      subtitle: '',
      id: '',
    },
  ],
};
