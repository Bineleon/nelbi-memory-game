import React from 'react';
import './styles.css';
import Navbar from './Navbar';
import MemoryGame from './MemoryGame';
import Resume from './navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <MemoryGame />
      <Resume />
    </div>
  );
}

export default App;
