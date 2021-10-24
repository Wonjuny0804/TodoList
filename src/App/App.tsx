import React from 'react';
import './App.scss';
import {
  Main
} from '../pages/index';
import { Provider } from "react-redux";
import { store } from "../redux/store";

function App():JSX.Element {
  const today = new Date();

  return (
  <div className="App">
    <Provider store={store}>
      <Main today={today}/>
    </Provider>
  </div>
  );
}

export default App;
