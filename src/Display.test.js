import React from 'react';
import ReactDOM from 'react-dom';
import Display from './Display';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Display display="1+2" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
