import React from 'react';
import './App.scss';
import {
  Signature
} from '../components'

function App() {
  return (<div className="App">
    <Signature first_name="Wonjun" last_name="Jang" occupation="Frontend Engineer" description={['Creative Tech Enthusiast', 'interested in Art']} />
  </div>
  );
}

export default App;
