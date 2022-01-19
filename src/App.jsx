import React from 'react';
import { useState } from 'react';
import './App.css';
import Headlinks from './components/Headlinks';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="nav bg-accent">Chat</div>
      <div className="content"></div>
    </div>
  );
}

export default App;
