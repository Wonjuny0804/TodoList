import React from 'react';
import './App.scss';
import {
  Signature
} from '../components'

function App() {
  return (<div className="App">
    <Signature first_name="Wonjun" last_name="Jang" occupation="Frontend Enginner" description={['creative tech enthusiast', 'interested in art']} />
  </div>
  );
}

export default App;
