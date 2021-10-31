import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import SaveIcon from '@mui/icons-material/Save';
import LoadingButton from '@mui/lab/LoadingButton';
import BlogPopUp from '../../../components/BlogPopUp/BlogPopUp';
import { ShopType } from '../../../../store/shop-reducers';

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

  const unitHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUnit(event.target.value);
  };

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
        <img src={props.shop.image} className="blog__image" alt="shop" />
        <div>
          <span className="blog__title">Title:</span> {props.shop.title}
        </div>
        <div>
          <span>
            <span className="blog__title">Subtitle:</span> {props.shop.subtitle}
          </span>
        </div>
        <div>
          <span>
            <span className="blog__title">Price:</span> {props.shop.price}
          </span>
        </div>
        <div>
          <span>
            <span className="blog__title">Per Unit:</span> {props.shop.unit}
          </span>
        </div>
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
                  id="standard-basic"
                  label="price"
                  variant="filled"
                  value={price}
                  multiline
                  fullWidth
                  onChange={priceHandleChange}
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
                  label="unit"
                  variant="filled"
                  multiline
                  fullWidth
                  value={unit}
                  onChange={unitHandleChange}
                />
              </div>
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
