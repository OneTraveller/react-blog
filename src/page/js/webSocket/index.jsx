import React, { Component } from 'react';

export default class WebSocket extends Component {
  componentWillMount () {
    const ws = new WebSocket("wss://echo.websocket.org");

    ws.onopen = function (evt) {
      console.log("Connection open ...");
      ws.addEventListener('open', function () {
        ws.send('message')
      });
    };

    ws.onmessage = function (evt) {
      console.log("Received Message: " + evt.data);
      ws.close();
    };

    ws.onclose = function (evt) {
      console.log("Connection closed.");
    };
  }

  render () {
    return (
      <div>WebSocket</div>
    )
  }
}