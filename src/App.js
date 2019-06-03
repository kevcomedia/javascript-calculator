import React from 'react';
import Display from './Display';
import CalculatorButtons from './CalculatorButtons';
import useCalculatorInput from './useCalculatorInput';
import './App.css';

function App() {
  const [input, dispatch] = useCalculatorInput();

  return (
    <div className="App">
      <Display display={input} />
      <CalculatorButtons dispatch={dispatch} />
    </div>
  );
}

export default App;
