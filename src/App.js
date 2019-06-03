import React from 'react';
import Display from './Display';
import CalculatorButtons from './CalculatorButtons';
import './App.css';

function App() {
  return (
    <div className="App">
      <Display display="0" />
      <CalculatorButtons />
    </div>
  );
}

export default App;
