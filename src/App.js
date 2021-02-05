import React from 'react';
import Title from './components/title';
import Listwonders from './components/listwonders';
import './App.css';

function App() {
  return (
    <div className="App">
        <Title />
        <div className="container">
        <Listwonders />
        </div>
    </div>
  );
}

export default App;
