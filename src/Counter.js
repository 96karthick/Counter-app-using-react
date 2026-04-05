import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App</h1>
      <h2>{count}</h2>

      {count === 0 && <p style={{ color: "red" }}>Count is zero</p>}

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => count > 0 && setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;