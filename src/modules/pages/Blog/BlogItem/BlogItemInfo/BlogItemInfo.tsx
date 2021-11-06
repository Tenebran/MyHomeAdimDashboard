import React from 'react';

export const BlogItemInfo = (props: BlogItemInfoPropsType) => {
  return (
    <>
      <img alt="blog" src={props.image} className="blog__image" />
      <div>
        <span className="blog__title">Title:</span> {props.title}
      </div>
      <div>
        <span>
          <span className="blog__title">Subtitle:</span> {props.subtitle}
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
