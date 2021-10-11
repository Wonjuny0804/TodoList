import React from 'react';
import './App.scss';
import {
  Main
} from '../pages/index';

function App():JSX.Element {
  const today = new Date();

  return (
  <div className="App">
    <Main today={today}/>
  </div>
  );
}

export default App;
