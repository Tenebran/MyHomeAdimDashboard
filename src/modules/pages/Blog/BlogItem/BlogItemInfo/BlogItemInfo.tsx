import React from 'react';
import noImage from '../../../../common/image/app/no-image.png';

export const BlogItemInfo = (props: BlogItemInfoPropsType) => {
  return (
    <>
      <img alt="blog" src={props.image ? props.image : noImage} className="blog__image" />
      <div>
        <span className="blog__title">Title:</span> {props.title}
      </div>
      <div>
        <span>
          <span className="blog__title">Subtitle:</span>
          <div className="blog__text">{props.subtitle}</div>
        </span>
      </div>
    </>
  );
};

type BlogItemInfoPropsType = {
  image: string;
  title: string;
  subtitle: string;
};
