import React from 'react';
import { useState } from 'react';
import './App.css';
import Headlink from './components/Headlink';
import ChatArea from './components/ChatArea';

function App() {
  // const [chats, setChats] = useState([
  //   {
  //     image: 'https://picsum.photos/id/1/200/200',
  //     head: 'Head 1',
  //     description: 'Description 1',
  //     time: new Date(
  //       Date.now() - Math.floor(1000 * 60 * 60 * 2 * Math.random())
  //     ).toJSON(),
  //     count: 4,
  //     isUnread: true,
  //   },
  //   {
  //     image: 'https://picsum.photos/id/2/200/200',
  //     head: 'Head 2',
  //     description: 'Description 2',
  //     time: new Date(
  //       Date.now() - Math.floor(1000 * 60 * 60 * 2 * Math.random())
  //     ).toJSON(),
  //     count: 2,
  //     isUnread: true,
  //   },
  //   {
  //     image: 'https://picsum.photos/id/3/200/200',
  //     head: 'Head 3',
  //     description: 'Description 3',
  //     time: new Date(
  //       Date.now() - Math.floor(1000 * 60 * 60 * 2 * Math.random())
  //     ).toJSON(),
  //     count: 0,
  //     isUnread: false,
  //   },
  //   {
  //     image: 'https://picsum.photos/id/4/200/200',
  //     head: 'Head 4',
  //     description: 'Description 4',
  //     time: new Date(
  //       Date.now() - Math.floor(1000 * 60 * 60 * 2 * Math.random())
  //     ).toJSON(),
  //     count: 0,
  //     isUnread: false,
  //   },
  // ]);

  const chats = {
    name: 'Goblin',
    image: 'https://picsum.photos/id/4/200/200',
    isOnline: true,
    messages: [
      {
        message: 'gaand marao',
        time: '2022-01-19T19:16:45.278Z',
        priority: 0,
        sentByMe: false,
      },
      {
        message: 'gaand marao',
        time: '2022-01-19T19:16:45.278Z',
        priority: 0,
        sentByMe: false,
      },
    ],
  };

  return (
    <div className="App">
      <div className="nav">Messages</div>
      <ChatArea chats={chats} />

      {/* <div className="content">
        <div className="headlinks">
          {chats.map((chat, index) => (
            <Headlink
              key={index}
              image={chat.image}
              head={chat.head}
              description={chat.description}
              time={chat.time}
              count={chat.count}
              isUnread={chat.isUnread}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default App;
