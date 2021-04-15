import React, { useState } from 'react';

import { Button } from './components/Button';
import './App.css'

const sleep = async (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

function App() {
  const [clicked, setClicked] = useState();

  const sync = () => {};

  const succesfullAsync  = async () => {
    await sleep(1000);
  };

  const errorAsync  = async () => {
    await sleep(1000);
    throw new Error('Whoops!')
  };

  const unmount = async () => {
    await sleep(500)
    setClicked(true)
  }

  return (
    <div className="App">
      <div className="columns">
        <div className="column">
          <Button onClick={sync}>Sync</Button>
        </div>
        <div className="column">
          <Button onClick={succesfullAsync}>Async - Success</Button>
        </div>
        <div className="column">
          <Button onClick={errorAsync}>Async - Error</Button>
        </div>
        <div className="column">
          {!clicked && <Button onClick={unmount}>Unmount</Button>}
        </div>
      </div>
      <div>
        <div>
          <strong>
            Rules:
          </strong>
          <br/>
          <ul>
            <li>Do not change App.js</li>
            <li>No error on browser console</li>
            <li>Sync button should not have loading state when clicked</li>
            <li>Async button should have loading state when clicked, and should back to normal state when the function resolved</li>
            <li>Unmount button should be unmounted when clicked</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
