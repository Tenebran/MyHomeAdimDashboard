import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://61746ce908834f0017c7098a.mockapi.io/myHome',
});

export const getProfile = {
  profile() {
    return instance.get<Array<profileType>>('/profil');
  },
  updateProfil(
    name: string,
    surname: string,
    aboutme: string,
    video: string,
    profession: string,
    image: string
  ) {
    return instance.put('/profil/1/', { name, surname, aboutme, video, profession, image });
  },
};

export const getAdress = {
  adress() {
    return instance.get<Array<adressType>>('/adress');
  },
  updateAdress(
    name: string,
    street: string,
    city: string,
    mobile: string,
    email: string,
    paypalme: string
  ) {
    return instance.put('/adress/1/', { name, street, city, mobile, email, paypalme });
  },
};

export const getShop = {
  shop() {
    return instance.get<Array<ShopType>>('shop');
  },
  addShop(title: string, price: string, image: string, subtitle: string) {
    return instance.post('/shop/', { title, price, image, subtitle });
  },
  deleteShop(id: string) {
    return instance.delete(`/shop/${id}`);
  },

  updateShop(id: string, title: string, price: string, image: string, subtitle: string) {
    return instance.put(`/shop/${id}`, { title, price, image, subtitle });
  },
};

export const getBlog = {
  blog() {
    return instance.get<Array<BlogType>>('/blog');
  },
  updateBlog(id: string, title: string, image: string, subtitle: string) {
    return instance.put(`/blog/${id}/`, {
      title: title,
      image: image,
      subtitle: subtitle,
    });
  },

  deleteBlog(id: string) {
    return instance.delete(`/blog/${id}`);
  },

  addBlog(title: string, image: string, subtitle: string) {
    return instance.post(`/blog/`, {
      title: title,
      image: image,
      subtitle: subtitle,
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
  aboutme: string;
  video: string;
};

export type adressType = {
  createdAt: string;
  name: string;
  street: string;
  city: string;
  id: string;
  mobile: string;
  email: string;
  paypalme: string;
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
