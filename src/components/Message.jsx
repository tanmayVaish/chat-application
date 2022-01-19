import React from 'react';
import PropTypes from 'prop-types';
import './styles/Message.css';

const Message = ({ message, timestamp, sentByMe }) => {
  return (
    <div className={`${sentByMe && 'sent'} message`}>
      <div className="message_bubble">
        <div className="message_bubble_header">
          <div className="message_bubble_header_name">{name}</div>
        </div>
        <div className="message_bubble_body">{message}</div>
      </div>
      <div className="message_timestamp">
        {new Date(timestamp).toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })}
      </div>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  sentByMe: PropTypes.bool.isRequired,
};

export default Message;
