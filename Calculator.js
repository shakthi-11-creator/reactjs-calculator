import React, { useState } from "react";
import { evaluate } from "mathjs";
import './Calculator.css';

function Calculator() {
  const [value, setValue] = useState('');

  const handleEqual = () => {
    try {
      setValue(String(evaluate(value)));
    } catch {
      setValue("Error");
    }
  };

  return (
    <div className="container">
      <div className="calci">
        <form onSubmit={e => e.preventDefault()}>
          <div className="display">
            <input type="text" value={value} readOnly />
          </div>
          <div>
            <input type="button" value="AC" onClick={() => setValue("")} />
            <input type="button" value="DEL" onClick={() => setValue(value.slice(0, -1))} />
            <input type="button" value="." onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="/" onClick={e => setValue(value + e.target.value)} />
          </div>
          <div>
            <input type="button" value="7" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="8" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="9" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="*" onClick={e => setValue(value + e.target.value)} />
          </div>
          <div>
            <input type="button" value="4" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="5" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="6" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="-" onClick={e => setValue(value + e.target.value)} />
          </div>
          <div>
            <input type="button" value="1" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="2" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="3" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="+" onClick={e => setValue(value + e.target.value)} />
          </div>
          <div>
            <input type="button" value="00" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="0" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="=" className="equal" onClick={handleEqual} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Calculator;