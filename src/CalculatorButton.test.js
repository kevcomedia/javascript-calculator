import React from 'react';
import ReactDOM from 'react-dom';
import CalculatorButton from './CalculatorButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CalculatorButton label="3" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
