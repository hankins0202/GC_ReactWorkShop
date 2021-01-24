import React, { useState } from "react";
import "./Counter.css"; //import CSS file

function Counter() {
  const [count, setCount] = useState(0); //two variables count and setcount

  function countUp() {
    setCount(count + 1);
  }
  // function countDown(){
  //   setCount(count - 1);
  // }
  function resetCount() {
    setCount(0);
  }
  //return the JSX that makes up this component
  return (
    <div className="Counter">
      <h3>Counter</h3>
      <p>{count}</p>
      <p>
        <button onClick={() => setCount(count - 1)}>Down</button>
        {count !== 0 && <button onClick={resetCount}>Reset</button>}
        <button onClick={countUp}>Up</button>
      </p>
    </div>
  );
}

export default Counter;
