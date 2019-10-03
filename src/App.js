import React from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import './style/common.css';
import { DatePicker } from 'antd';
import Clock from './components/clock.jsx';

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <DatePicker />
        <Clock />
      </header>
    </div>
  );
}

export default App;
