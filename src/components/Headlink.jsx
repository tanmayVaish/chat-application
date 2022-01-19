import React from 'react';
import propTypes from 'prop-types';
import './styles/Headlink.css';

const Headlink = ({ image, head, description, time, count, isUnread }) => {
  return (
    <div className="headlink">
      <div
        className="image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>

      <div className="head">
        <div className="head-title">
          <h3>{head}</h3>
        </div>
        {isUnread ? (
          <p className="description-unread">{description}</p>
        ) : (
          <p className="description-read">{description}</p>
        )}
      </div>

      <div className="time"></div>
      <div className="count"></div>
      <div className="isUnread"></div>
    </div>
  );
};

Headlink.propTypes = {
  image: propTypes.string,
  head: propTypes.string.isRequired,
  description: propTypes.string,
  time: propTypes.string,
  count: propTypes.number,
  isUnread: propTypes.bool,
};

export default Headlink;
