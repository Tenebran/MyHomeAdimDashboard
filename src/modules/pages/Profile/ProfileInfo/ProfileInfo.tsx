import React from 'react';
import ReactPlayer from 'react-player';

export const ProfileInfo = (props: ProfileInfoPropsType) => {
  return (
    <>
      <img alt="blog" src={props.image} className="blog__image" />
      <div>
        <span className="blog__title">Live String: </span>
        {props.profession}
      </div>
      <div>
        <span className="blog__title">Name: </span>
        {props.name}
      </div>
      <div>
        <div className="wrapper__info">
          <span>
            <span className="blog__title">Surname: </span>
            {props.surname}
          </span>
        </div>
        <div className="wrapper__info">
          <span>
            <span className="blog__title">AboutMe: </span>
            {props.aboutme}
          </span>
        </div>
        <div className="wrapper__info">
          <span>
            <span className="blog__title">Video: </span>
            <div className="blog__video-wrapper">
              <ReactPlayer url={props.video} />
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

type ProfileInfoPropsType = {
  image: string;
  profession: string;
  name: string;
  surname: string;
  aboutme: string;
  video: string;
};
