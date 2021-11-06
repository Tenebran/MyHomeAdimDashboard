import React from 'react';

export const ContactInfo = (props: ContactInfoPropsType) => {
  return (
    <>
      <span className="blog__title">Name: </span>
      {props.name}
      <div>
        <span className="blog__title">Street: </span>
        {props.street}
      </div>
      <div>
        <span className="blog__title">City: </span>
        {props.city}
      </div>
      <div>
        <div className="wrapper__info">
          <span>
            <span className="blog__title">Tel: </span>
            {props.mobile}
          </span>
        </div>
        <div className="wrapper__info">
          <span>
            <span className="blog__title">Email: </span>
            {props.email}
          </span>
        </div>
        <div className="wrapper__info">
          <span>
            <span className="blog__title">Text: </span>
            {props.text}
          </span>
        </div>
        <div className="wrapper__info">
          <span>
            <span className="blog__title">PayPalMe: </span>
            {props.paypalme}
          </span>
        </div>
      </div>
    </>
  );
};

type ContactInfoPropsType = {
  name: string;
  street: string;
  city: string;
  mobile: string;
  email: string;
  text: string;
  paypalme: string;
};
