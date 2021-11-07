import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React, { useCallback, useState } from 'react';
import SaveIcon from '@mui/icons-material/Save';
import LoadingButton from '@mui/lab/LoadingButton';
import BlogPopUp from '../../../components/BlogPopUp/BlogPopUp';
import { ShopType } from '../../../../store/shop-reducers';
import { ShopItemInfo } from './ShopItemInfo/ShopItemInfo';
import { ShopItemEdit } from './ShopItemEdit/ShopItemEdit';

export const ShopItem = (props: BlogItemProps) => {
  const [edit, setedit] = useState<boolean>(false);
  const [title, settitle] = useState<string>(props.shop.title);
  const [price, setprice] = useState<string>(props.shop.price);
  const [subtitle, setsubtitle] = useState<string>(props.shop.subtitle);
  const [image, setimage] = useState<string>(props.shop.image);
  const [unit, setUnit] = useState(props.shop.unit);
  const [popupOpen, setPopupOpen] = useState<boolean>(false);

  const openEditHandler = () => {
    if (!edit) {
      setedit(true);
    } else {
      setedit(false);
    }
  };

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

  const onUpdateHandler = () => {
    props.updateShopHandler(props.shop.id, title, price, image, subtitle, unit);
    setedit(false);
  };
  return (
    <Grid item key={props.shop.id} className="blog">
      <Paper elevation={5} className="blog__paper">
        <BlogPopUp
          open={popupOpen}
          setOpen={setPopupOpen}
          title={props.shop.title}
          id={props.shop.id}
          deleteBlogHandler={props.deleteShopHandler}
        />
        <ShopItemInfo
          image={props.shop.image}
          title={props.shop.title}
          subtitle={props.shop.subtitle}
          price={props.shop.price}
          unit={props.shop.unit}
        />

        <div className="blog__button_edit">
          {!edit ? (
            <div className="blog__button-wrapper">
              <Button variant="contained" color="secondary" onClick={() => setPopupOpen(true)}>
                Delete
              </Button>
              <Button variant="contained" color="primary" onClick={openEditHandler}>
                Edit
              </Button>
            </div>
          ) : (
            ''
          )}

          {edit ? (
            <>
              <ShopItemEdit
                image={image}
                imageHandleChange={imageHandleChange}
                price={price}
                priceHandleChange={priceHandleChange}
                title={title}
                titleHandleChange={titleHandleChange}
                subtitle={subtitle}
                subTitleHandleChange={subTitleHandleChange}
                unit={unit}
                unitHandleChange={unitHandleChange}
              />

              <div className="blog__button-wrapper">
                <Button variant="contained" color="secondary" onClick={openEditHandler}>
                  Cancel
                </Button>
                <LoadingButton
                  color="secondary"
                  onClick={onUpdateHandler}
                  loadingPosition="start"
                  startIcon={<SaveIcon />}
                  variant="contained"
                >
                  Save
                </LoadingButton>
              </div>
            </>
          ) : (
            ''
          )}
        </div>
      </Paper>
    </Grid>
  );
};

type BlogItemProps = {
  shop: ShopType;
  updateShopHandler: (
    id: string,
    title: string,
    price: string,
    image: string,
    subtitle: string,
    unit: string
  ) => void;
  deleteShopHandler: (id: string) => void;
};
