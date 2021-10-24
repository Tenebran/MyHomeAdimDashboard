import { shopReducers } from './shop-reducers';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { ActionTypeProfile, profileReducers } from './profile-reducers';
import { blogReducer } from './blog-reducers';
import { footerReducer } from './footer-reduser';
import thunk, { ThunkAction } from 'redux-thunk';

const rootReducer = combineReducers({
  shop: shopReducers,
  profile: profileReducers,
  blog: blogReducer,
  footer: footerReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type ThunkType = ThunkAction<void, AppRootStateType, unknown, AppActionsType>;

type AppActionsType = ActionTypeProfile;

export type AppRootStateType = ReturnType<typeof rootReducer>;
