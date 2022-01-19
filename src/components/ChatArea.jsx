import React from 'react';
import propTypes from 'prop-types';
import './styles/ChatArea.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ChatArea = ({ chats }) => {
  return (
    <div className="chat-area">
      <div className="chat-area-head">
        <div className="chat-area-head-back">
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className="grow flex items-center justify-evenly">
          <div
            className="chat-area-head-image"
            style={{
              backgroundImage: `url(${chats.image})`,
            }}
          />
          <div className="chat-area-head-box">
            <div className="chat-area-head-name">{chats.name}</div>
            <div className="chat-area-head-status">
              {chats.isOnline ? 'Online' : 'Offline'}
            </div>
          </div>
        </div>
        <div className="chat-area-head-menu">
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
      </div>
    </div>
  );
};

ChatArea.prototype = {
  chats: propTypes.object.isRequired,
};

export default ChatArea;
