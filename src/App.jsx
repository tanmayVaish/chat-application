import React from 'react';
import { useState } from 'react';
import './App.css';
import Headlink from './components/Headlink';
import ChatArea from './components/ChatArea';
import SideNav from './components/SideNav';

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
  //     count: 0,
  //     isUnread: false,
  //   },
  // ]);

  const [chats, setChats] = useState([
    {
      name: 'Goblin',
      image: 'https://picsum.photos/id/4/200/200',
      description: 'Description 4',
      isOnline: true,
      time: new Date(
        Date.now() - Math.floor(1000 * 60 * 60 * 2 * Math.random())
      ).toJSON(),
      count: 2,
      isUnread: true,
      messages: [
        {
          message: 'Hi',
          timestamp: '2022-01-19T19:16:45.278Z',
          sentByMe: false,
        },
        {
          message: 'Hello',
          timestamp: '2022-01-19T19:16:45.278Z',
          sentByMe: true,
        },
        {
          message: 'How are you?',
          timestamp: '2022-01-19T19:16:45.278Z',
          sentByMe: false,
        },
        {
          message: 'I am a Goblin',
          timestamp: '2022-01-19T19:16:45.278Z',
          sentByMe: true,
        },
      ],
    },
    {
      name: 'Ayan',
      image: 'https://picsum.photos/id/4/200/200',
      description: 'Description 4',
      isOnline: true,
      time: new Date(
        Date.now() - Math.floor(1000 * 60 * 60 * 2 * Math.random())
      ).toJSON(),
      count: 0,
      isUnread: false,
      messages: [
        {
          message: 'Hi',
          timestamp: '2022-01-19T19:16:45.278Z',
          sentByMe: false,
        },
        {
          message: 'Hello',
          timestamp: '2022-01-19T19:16:45.278Z',
          sentByMe: true,
        },
        {
          message: 'How are you?',
          timestamp: '2022-01-19T19:16:45.278Z',
          sentByMe: false,
        },
        {
          message: 'I am a Goblin',
          timestamp: '2022-01-19T19:16:45.278Z',
          sentByMe: true,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      {/* <div className="nav">Messages</div> */}
      {/* <div className="content">
        <div className="headlinks">
          {chats.map((chat) => (
            <Headlink
              key={chat.name}
              name={chat.name}
              image={chat.image}
              description={chat.description}
              isOnline={chat.isOnline}
              time={chat.time}
              count={chat.count}
              isUnread={chat.isUnread}
            />
          ))}
        </div>
      </div> */}
      {/* <ChatArea chats={chats[0]} /> */}
      <SideNav></SideNav>
    </div>
  );
}

export default App;
