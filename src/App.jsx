import React from 'react';
import { useState } from 'react';
import './App.css';
import Headlink from './components/Headlink';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="nav">Chat</div>
      <div className="content">
        <div className="headlinks">
          <Headlink
            image="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            head="Sarvesh"
            description="Mai Vadapav kha ra hu!"
            time="10:00"
            count={count}
            isUnread={true}
          />
          <Headlink
            image="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            head="Ayan"
            description="Machli Khayga"
            time="10:00"
            count={count}
            isUnread={false}
          />
          <Headlink
            image="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            head="Goblin"
            description="oooooo bhai"
            time="10:00"
            count={count}
            isUnread={true}
          />{' '}
          <Headlink
            image="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            head="Alok Nath"
            description="Kitna Chapri hai ye!"
            time="10:00"
            count={count}
            isUnread={true}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
