import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addMessage} from './redux/state';

export const renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App appState={state} addMessage={addMessage} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}