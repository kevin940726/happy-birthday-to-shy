import React from 'react';
import HappyBirthday from './HappyBirthday';
import Olaf from './Olaf';
import './App.css';
import { BACKGROUND } from './constants';

const App = () => (
  <main
    className="App"
    style={{
      backgroundColor: BACKGROUND,
    }}
  >
    <HappyBirthday />
    <Olaf />
  </main>
);

export default App;
