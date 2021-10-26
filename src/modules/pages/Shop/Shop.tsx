import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import React, { useEffect, useState } from 'react';
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

export const Shop = () => {
  const shop = useSelector<AppRootStateType, Array<ShopType>>(state => state.shop.shop);
  const [title, settitle] = useState<string>('');
  const [subtitle, setsubtitle] = useState<string>('');
  const [image, setimage] = useState<string>('');
  const [price, setprice] = useState<string>('');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getShopTC());
  }, []);

  const imageHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setimage(event.target.value);
  };

  const subTitleHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setsubtitle(event.target.value);
  };
  const titleHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    settitle(event.target.value);
  };

  const priceHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setprice(event.target.value);
  };

  const addBlogCancel = () => {
    setimage('');
    settitle('');
    setsubtitle('');
  };

  const oncklickAddShopkHandler = () => {
    dispatch(addShopTC(title, price, image, subtitle));
    setimage('');
    settitle('');
    setsubtitle('');
    setprice('');
  };

  const updateShopHandler = (
    id: string,
    title: string,
    price: string,
    image: string,
    subtitle: string
  ) => {
    dispatch(updateShopTC(id, title, price, image, subtitle));
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
                <div className="blog__editplace">
                  <TextField
                    id="standard-basic"
                    label="image"
                    variant="filled"
                    value={image}
                    multiline
                    fullWidth
                    onChange={imageHandleChange}
                  />
                  <TextField
                    id="outlined-multiline-static"
                    label="title"
                    variant="filled"
                    multiline
                    fullWidth
                    value={title}
                    onChange={titleHandleChange}
                  />
                  <TextField
                    id="standard-basic"
                    label="subtitle"
                    variant="filled"
                    multiline
                    fullWidth
                    value={subtitle}
                    onChange={subTitleHandleChange}
                  />
                  <TextField
                    id="standard-basic"
                    label="price"
                    variant="filled"
                    multiline
                    fullWidth
                    value={price}
                    onChange={priceHandleChange}
                  />
                </div>
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
