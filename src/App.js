import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="display">0</div>
      <div className="buttons">
        <button className="btn btn_type_clear btn_size_wide" type="button">
          AC
        </button>
        <button className="btn btn_type_operator" type="button">
          /
        </button>
        <button className="btn btn_type_operator" type="button">
          *
        </button>
        <button className="btn" type="button">
          7
        </button>
        <button className="btn" type="button">
          8
        </button>
        <button className="btn" type="button">
          9
        </button>
        <button className="btn btn_type_operator" type="button">
          -
        </button>
        <button className="btn" type="button">
          4
        </button>
        <button className="btn" type="button">
          5
        </button>
        <button className="btn" type="button">
          6
        </button>
        <button className="btn btn_type_operator" type="button">
          +
        </button>
        <button className="btn" type="button">
          1
        </button>
        <button className="btn" type="button">
          2
        </button>
        <button className="btn" type="button">
          3
        </button>
        <button className="btn btn_type_equals btn_size_tall" type="button">
          =
        </button>
        <button className="btn btn_size_wide" type="button">
          0
        </button>
        <button className="btn" type="button">
          .
        </button>
      </div>
    </div>
  );
}

export default App;
