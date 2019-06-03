import React from 'react';
import ReactDOM from 'react-dom';
import CalculatorButtons from './CalculatorButtons';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CalculatorButtons />, div);
  ReactDOM.unmountComponentAtNode(div);
});
