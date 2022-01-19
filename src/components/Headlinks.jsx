import React from 'react';
import propTypes from 'prop-types';

const Headlinks = ({ image, head, description, time, count, isUnread }) => {
  return (
    <div>
      <div className="image">
        <img src={image} alt="head" />
      </div>
      <div className="head">
        <div className="head-title">
          <h3>{head}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="time"></div>
      <div className="count"></div>
      <div className="isUnread"></div>
    </div>
  );
};

Headlinks.propTypes = {
  image: propTypes.string,
  head: propTypes.string.isRequired,
  description: propTypes.string,
  time: propTypes.string,
  count: propTypes.number,
  isUnread: propTypes.bool,
};

export default Headlinks;
