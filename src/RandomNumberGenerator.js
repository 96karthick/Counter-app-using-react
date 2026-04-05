import React, { useState } from "react";

function RandomNumberGenerator() {
  const [number, setNumber] = useState(null);

  const generateNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNum);
  };

  return (
    <div style={styles.container}>
      <h1>🎲 Random Number Generator</h1>

      {/* Conditional Rendering */}
      {number === null ? (
        <p>No number generated yet</p>
      ) : (
        <h2>{number}</h2>
      )}

      <button onClick={generateNumber} style={styles.button}>
        Generate Random Number
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    marginTop: "20px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
  },
};

export default RandomNumberGenerator;