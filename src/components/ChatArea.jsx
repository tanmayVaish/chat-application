import React from 'react';
import propTypes from 'prop-types';
import './styles/ChatArea.css';

import Message from './Message';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import Attach from '../assets/attach.svg';
import Send from '../assets/send.svg';

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
          >
            <div
              className={`chat-area-head-indicator ${
                chats.isOnline
                  ? `chat-area-head-indicator-online`
                  : `chat-area-head-indicator-offline`
              }`}
            />
          </div>
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
      <div className="chat-area-body">
        {chats.messages.map((message) => (
          <Message
            key={message.id}
            message={message.message}
            timestamp={message.timestamp}
            sentByMe={message.sentByMe}
          />
        ))}
      </div>
      <div className="chat-area-footer">
        <div className="chat-area-footer-box">
          <div className="chat-area-footer-input">
            <input type="text" placeholder="Type a message" />
            <img src={Attach} alt="attach" />
          </div>
          <div className="chat-area-footer-send">
            <img src={Send} alt="send" />
          </div>
        </div>
      </div>
    </div>
  );
};

ChatArea.propTypes = {
  chats: propTypes.object.isRequired,
};

export default ChatArea;
