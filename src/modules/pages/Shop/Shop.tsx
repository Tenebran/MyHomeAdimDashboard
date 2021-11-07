import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import React, { useCallback, useEffect, useState } from 'react';
import { AppRootStateType } from '../../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@mui/icons-material/Save';
import Button from '@material-ui/core/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import { Header } from '../../components/Header';
import { ShopItem } from './ShopItem/ShopItem';
import {
  addShopTC,
  deleteShopTC,
  getShopTC,
  ShopType,
  updateShopTC,
} from '../../../store/shop-reducers';
import { ShopAddNewItem } from './ShopAddNewItem/ShopAddNewItem';

export const Shop = () => {
  const shop = useSelector<AppRootStateType, Array<ShopType>>(state => state.shop.shop);
  const [title, settitle] = useState<string>('');
  const [subtitle, setsubtitle] = useState<string>('');
  const [image, setimage] = useState<string>('');
  const [price, setprice] = useState<string>('');
  const [unit, setUnit] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getShopTC());
  }, [dispatch]);

  const imageHandleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setimage(event.target.value);
    },
    [setimage]
  );

  const subTitleHandleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setsubtitle(event.target.value);
    },
    [setsubtitle]
  );

  const titleHandleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      settitle(event.target.value);
    },
    [settitle]
  );

  const priceHandleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setprice(event.target.value);
    },
    [setprice]
  );

  const unitHandleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUnit(event.target.value);
    },
    [setUnit]
  );

  const addBlogCancel = () => {
    setimage('');
    settitle('');
    setsubtitle('');
  };

  const oncklickAddShopkHandler = () => {
    dispatch(addShopTC(title, price, image, subtitle, unit));
    setimage('');
    settitle('');
    setsubtitle('');
    setprice('');
    setUnit('');
  };

  const updateShopHandler = (
    id: string,
    title: string,
    price: string,
    image: string,
    subtitle: string,
    unit: string
  ) => {
    dispatch(updateShopTC(id, title, price, image, subtitle, unit));
  };

  const deleteShopHandler = (id: string) => {
    dispatch(deleteShopTC(id));
  };
  return (
    <>
      <>
        <Header type="shop" />
        <Container fixed>
          <Grid container spacing={5}>
            <Grid item className="blog">
              <Paper elevation={5} className="blog__paper">
                <h1>Add New Item</h1>
                <ShopAddNewItem
                  image={image}
                  imageHandleChange={imageHandleChange}
                  title={title}
                  titleHandleChange={titleHandleChange}
                  subtitle={subtitle}
                  subTitleHandleChange={subTitleHandleChange}
                  price={price}
                  priceHandleChange={priceHandleChange}
                  unit={unit}
                  unitHandleChange={unitHandleChange}
                />

                <div className="blog__button-wrapper">
                  <Button variant="contained" color="secondary" onClick={addBlogCancel}>
                    Cancel
                  </Button>
                  <LoadingButton
                    color="secondary"
                    onClick={oncklickAddShopkHandler}
                    loadingPosition="start"
                    startIcon={<SaveIcon />}
                    variant="contained"
                  >
                    Save
                  </LoadingButton>
                </div>
              </Paper>
            </Grid>
            {shop.map(shop => {
              return (
                <ShopItem
                  key={shop.id}
                  shop={shop}
                  updateShopHandler={updateShopHandler}
                  deleteShopHandler={deleteShopHandler}
                />
              );
            })}
          </Grid>
        </Container>
      </>
    </>
  );
};
