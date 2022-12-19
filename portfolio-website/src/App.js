import './App.css';
import React from 'react'
import Experiences from './Components/Experiences.js'
import NameCard from './Components/NameCard';

function App() {
  return (
    <div className="App">
      <NameCard/>
      <h1>Experiences</h1>
      <Experiences/>

    </div>
  );
}

export default App;