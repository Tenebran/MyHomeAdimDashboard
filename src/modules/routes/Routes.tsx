import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Manual } from '../components/Manual/Manual';
import { ManualAddImage } from '../components/Manual/ManualAddImage/ManualAddImage';
import { ManualBlog } from '../components/Manual/ManualBlog/ManualBlog';
import { ManualPayPal } from '../components/Manual/ManualPaypal/ManualPayPal';
import { ManualProfile } from '../components/Manual/ManualProfile/ManualProfile';
import { ManualShop } from '../components/Manual/ManualShop/ManualShop';
import { Blog } from '../pages/Blog/Blog';
import { Contact } from '../pages/Contact/Contact';
import { Profile } from '../pages/Profile/Profile';
import { Shop } from '../pages/Shop/Shop';

export enum PATH {
  MAIN = '/profile',
  IMPRESSUM = '/contact',
  SHOP = '/shop',
  BLOG = '/blog',
  MANUAL = '/manual',
  MANUAL_BLOG = '/manual/blog',
  MANUAL_SHOP = '/manual/shop',
  MANUAL_PROFILE = '/manual/profile',
  MANUAL_PAYPAL = '/manual/paypal',
  MANUAL_IMAGE_ADD = '/manual/image',
}

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={'/'} render={() => <Redirect to={PATH.MAIN} />} />
      <Route path={PATH.MAIN} component={Profile} />
      <Route exact path={PATH.IMPRESSUM} component={Contact} />
      <Route exact path={PATH.SHOP} component={Shop} />
      <Route exact path={PATH.BLOG} component={Blog} />
      <Route exact path={PATH.MANUAL} component={Manual} />
      <Route exact path={PATH.MANUAL_BLOG} component={ManualBlog} />
      <Route exact path={PATH.MANUAL_SHOP} component={ManualShop} />
      <Route exact path={PATH.MANUAL_PROFILE} component={ManualProfile} />
      <Route exact path={PATH.MANUAL_PAYPAL} component={ManualPayPal} />
      <Route exact path={PATH.MANUAL_IMAGE_ADD} component={ManualAddImage} />
    </Switch>
  );
};
