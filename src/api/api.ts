import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://61746ce908834f0017c7098a.mockapi.io/myHome',
});

export const getProfile = {
  profile() {
    return instance.get<Array<profileType>>('/profil');
  },
};

export const getAdress = {
  adress() {
    return instance.get<Array<adressType>>('/adress');
  },
};

export const getShop = {
  shop() {
    return instance.get<Array<ShopType>>('shop');
  },
};

export const getBlog = {
  blog() {
    return instance.get<Array<BlogType>>('/blog');
  },
  updateBlog() {
    return instance.put('/blog/1/', {
      title: 'Very Very New Title',
      image: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
    });
  },
};

export type profileType = {
  createdAt: string;
  image: string;
  irma: string;
  name: string;
  profession: string;
  surname: string;
};

export type adressType = {
  createdAt: string;
  name: string;
  street: string;
  city: string;
  id: string;
  mobile: string;
  email: string;
};

export type ShopType = {
  createdAt: string;
  name: string;
  avatar: string;
  title: string;
  price: string;
  image: string;
  subtitle: string;
  id: string;
};

export type BlogType = {
  createdAt: string;
  name: string;
  title: string;
  image: string;
  subtitle: string;
  id: string;
};
