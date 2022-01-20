import React from 'react';
import propTypes from 'prop-types';
import './styles/Headlink.css';
import timeDifference from '../utils/timeDifference';

const Headlink = ({
  name,
  image,
  description,
  count,
  isUnread,
  time,
  handleChatClick,
}) => {
  return (
    <div
      className="headlink"
      onClick={() => {
        handleChatClick(name);
      }}
    >
      <div
        className="image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>

      <div className="box">
        <div className="head">
          <div className="head-title">
            <div>{name}</div>
          </div>

          <div className="head-description">
            {!isUnread ? (
              <div className="description-unread">{description}</div>
            ) : (
              <div className="description-read">{description}</div>
            )}
          </div>
        </div>

        <div className="activity">
          <div className="time">{timeDifference(new Date(time))}</div>
          {isUnread && <div className="count">{count}</div>}
        </div>
      </div>
    </div>
  );
};

Headlink.propTypes = {
  name: propTypes.string.isRequired,
  image: propTypes.string,
  head: propTypes.string.isRequired,
  description: propTypes.string,
  time: propTypes.string,
  count: propTypes.number,
  isUnread: propTypes.bool,
  handleChatClick: propTypes.func,
};

export default Headlink;
