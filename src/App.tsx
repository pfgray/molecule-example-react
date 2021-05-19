

import logo from './logo.svg';
import './App.css';
import { makeAtom, map } from 'molecule/dist/atom'
import { useAtom } from 'molecule/dist/atom-react'
import { Eq } from 'fp-ts/number';
import { Eq as eqString } from 'fp-ts/string';
import React from 'react';
import { pipe } from 'fp-ts/function';
import { NotificationBell } from './NotificationBell';
import { NotificationList } from './NotificationList';
import { addExampleNotification } from './notifications';
import { NotificationHistory } from './NotificationHistory';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NotificationHistory />
        <img src={logo} className="App-logo" alt="logo" />
        <NotificationBell />
        <NotificationList />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={addExampleNotification}>add notification</button>
      </header>
    </div>
  );
}

export default App;
