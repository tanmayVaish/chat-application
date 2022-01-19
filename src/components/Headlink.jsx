import React from 'react';
import propTypes from 'prop-types';
import './styles/Headlink.css';
import timeDifference from '../utils/timeDifference';

const Headlink = ({ image, head, description, time, count, isUnread }) => {
  return (
    <div className="headlink">
      <div
        className="image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>

      <div className="box">
        <div className="head">
          <div className="head-title">
            <div>{head}</div>
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
  image: propTypes.string,
  head: propTypes.string.isRequired,
  description: propTypes.string,
  time: propTypes.string,
  count: propTypes.number,
  isUnread: propTypes.bool,
};

export default Headlink;
