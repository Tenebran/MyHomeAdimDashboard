import { Dispatch } from 'redux';
import { getShop } from '../api/api';

export const shopReducers = (
  shop: ShopInitialStateType = initialState,
  action: ActionType
): ShopInitialStateType => {
  switch (action.type) {
    case 'SHOP/GET_SHOP':
      return { ...shop, shop: action.shop };

    default: {
      return shop;
    }
  }
};

export const getShopsAC = (shop: Array<ShopType>) => {
  return { type: 'SHOP/GET_SHOP', shop } as const;
};

export const getShopTC = () => (dispatch: Dispatch) => {
  getShop.shop().then(res => {
    dispatch(getShopsAC(res.data));
  });
};

type ActionType = ReturnType<typeof getShopsAC>;

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

export type ShopInitialStateType = typeof initialState;

const initialState = {
  shop: [
    {
      createdAt: '',
      name: '',
      avatar: '',
      title: '',
      price: '',
      image: '',
      subtitle: '',
      id: '1',
    },
  ],
};
