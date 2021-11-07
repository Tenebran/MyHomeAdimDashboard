import TextField from '@material-ui/core/TextField';
import React from 'react';

export const ShopItemEdit = (props: ShopItemEditPropsType) => {
  return (
    <div className="blog__editplace">
      <TextField
        id="standard-basic"
        label="image"
        variant="filled"
        value={props.image}
        multiline
        fullWidth
        onChange={props.imageHandleChange}
      />
      <TextField
        id="standard-basic"
        label="price"
        variant="filled"
        value={props.price}
        multiline
        fullWidth
        onChange={props.priceHandleChange}
      />
      <TextField
        id="outlined-multiline-static"
        label="title"
        variant="filled"
        multiline
        fullWidth
        value={props.title}
        onChange={props.titleHandleChange}
      />
      <TextField
        id="standard-basic"
        label="subtitle"
        variant="filled"
        multiline
        fullWidth
        value={props.subtitle}
        onChange={props.subTitleHandleChange}
      />
      <TextField
        id="standard-basic"
        label="unit"
        variant="filled"
        multiline
        fullWidth
        value={props.unit}
        onChange={props.unitHandleChange}
      />
    </div>
  );
};

type ShopItemEditPropsType = {
  image: string;
  imageHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  price: string;
  priceHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  titleHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  subtitle: string;
  subTitleHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  unit: string;
  unitHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
