import React from 'react';
import 'antd/dist/antd.css';
import './style/App.css';
import './style/common.scss';
import MainRouter from './router/MainRouter';

function App () {
  return (
    <div className="App">
      <MainRouter />
    </div>
  );
}

export default App;
