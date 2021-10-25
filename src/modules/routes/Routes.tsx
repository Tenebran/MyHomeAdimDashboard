import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Blog } from '../pages/Blog/Blog';
import { Contact } from '../pages/Contact/Contact';
import { Profile } from '../pages/Profile/Profile';
import { Shop } from '../pages/Shop/Shop';

export enum PATH {
  MAIN = '/profile',
  IMPRESSUM = '/contact',
  SHOP = '/shop',
  BLOG = '/blog',
}

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={'/'} render={() => <Redirect to={PATH.MAIN} />} />
      <Route path={PATH.MAIN} component={Profile} />
      <Route exact path={PATH.IMPRESSUM} component={Contact} />
      <Route exact path={PATH.SHOP} component={Shop} />
      <Route exact path={PATH.BLOG} component={Blog} />
    </Switch>
  );
};
