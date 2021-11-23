import React from 'react';
import ReactPlayer from 'react-player';
import noVideo from '../../../common/image/app/no-video.jpg';
import noImage from '../../../common/image/app/no-image.png';

export const ProfileInfo = (props: ProfileInfoPropsType) => {
  return (
    <>
      <img alt="blog" src={props.image ? props.image : noImage} className="blog__image" />
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
            <div className="blog__text">{props.aboutme}</div>
          </span>
        </div>
        <div className="wrapper__info">
          <span>
            <span className="blog__title">Video: </span>
            {props.video ? (
              <div className="blog__video-wrapper">
                <ReactPlayer url={props.video} />
              </div>
            ) : (
              <div className="blog__video-wrapper">
                <img alt="blog" src={noVideo} className="blog__image" />{' '}
              </div>
            )}
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
