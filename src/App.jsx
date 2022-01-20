import React from 'react';
import { useState } from 'react';
import './App.css';
import Headlink from './components/Headlink';
import ChatArea from './components/ChatArea';
import SideNav from './components/SideNav';
import DownIcon from './assets/down.svg';
import SearchIcon from './assets/search.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH, faBell } from '@fortawesome/free-solid-svg-icons';

function App() {
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
      count: 4,
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
  ]);

  const [activeChat, setActiveChat] = useState(null);

  const handleChatClick = (name) => {
    const chat = chats.find((chat) => chat.name === name);
    setActiveChat({ ...chat, isUnread: false });
    setChats([
      ...chats.map((chat) =>
        chat.name === name ? { ...chat, isUnread: false } : chat
      ),
    ]);
  };

  return (
    <div className="App">
      <div className="desktopVersion">
        <SideNav></SideNav>
        <div className="appHead-g1">
          <div className="appHead-g1-top">
            <div className="headTitle">Chats</div>
            <div className="headSort">
              <div className="headSortIcon">
                <FontAwesomeIcon icon={faSlidersH} />
              </div>
              <div className="headSortContent">Sort</div>
            </div>
          </div>
          <div className="appHead-g1-mid">
            <img src={SearchIcon} alt="search" />
            <input type="text" placeholder="Search" />
          </div>
          <div className="appHead-g1-bottom">
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
          </div>
        </div>
        <div className="appHead-g2">
          <div className="appHead-g2-top">
            <div className="headBellIcon">
              <FontAwesomeIcon icon={faBell} />
            </div>

            <div className="headAccount">
              <div
                className="headAccountImage"
                style={{
                  backgroundImage: "url('https://picsum.photos/id/1/200/200')",
                }}
              />
              <div className="headAccountName">Tanmay</div>
              <img src={DownIcon} alt="down" />
            </div>
          </div>
          <div className="appHead-g2-bottom">
            <ChatArea chats={chats[0]} />
          </div>
        </div>
      </div>
      <div className="mobileVersion">
        {activeChat?.name ? (
          <div className="chats">
            <ChatArea chats={activeChat} setActiveChat={setActiveChat} />
          </div>
        ) : (
          <div className="messages">
            <div className="nav">Messages</div>
            <div className="content">
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
                    handleChatClick={handleChatClick}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
