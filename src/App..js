import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from "./Counter";
import RandomNumberGenerator from "./RandomNumberGenerator";

function App() {
  return (
    <Router>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>My React Apps</h1>

        <div>
          <Link to="/counter">Counter</Link> |{" "}
          <Link to="/random">Random Generator</Link>
        </div>

        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/random" element={<RandomNumberGenerator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;