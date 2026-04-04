import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Counter App</h1>

      <h2>{count}</h2>

      {count === 0 && ( <p style={{ color: "red" }}>Minimum limit reached</p>)}

      <button onClick={() => setCount(count + 1)} style ={{ backgroundColor: "green",color: "white",padding: "8px",margin: "5px", border: "none",borderRadius:"5px"}}>Increment</button>

      <button onClick={() => count > 0 && setCount(count - 1)} style ={{ backgroundColor: "orange",color: "white",padding: "8px",margin: "5px", border: "none",borderRadius:"5px"}}>
        Decrement
      </button>

      <button onClick={() => setCount(0)} style ={{ backgroundColor: "red",color: "white",padding: "8px",margin: "5px", border: "none",borderRadius:"5px"}}>Reset</button>
    </div>
  );
}

export default App;