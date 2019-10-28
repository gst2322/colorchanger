import React from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './Square';

function App() {
  return (
    <div className="App">
      <Square intialColor="blue"/>
      <Square intialColor="red"/>
      <Square intialColor="black"/>
    </div>
  );
}

export default App;
