import React from 'react';
import noImage from '../../../../common/image/app/no-image.png';

export const ShopItemInfo = (props: ShopItemInfoPropsType) => {
  return (
    <>
      {' '}
      <img src={props.image ? props.image : noImage} className="blog__image" alt="shop" />
      <div>
        <span className="blog__title">Title:</span> {props.title}
      </div>
      <div>
        <span>
          <span className="blog__title">Subtitle:</span> {props.subtitle}
        </span>
      </div>
      <div>
        <span>
          <span className="blog__title">Price:</span> {props.price}
        </span>
      </div>
      <div>
        <span>
          <span className="blog__title">Per Unit:</span> {props.unit}
        </span>
      </div>
    </>
  );
};

type ShopItemInfoPropsType = {
  title: string;
  subtitle: string;
  price: string;
  unit: string;
  image: string;
};
