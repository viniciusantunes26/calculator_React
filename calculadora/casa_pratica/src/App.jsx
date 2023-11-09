import { useEffect, useState } from "react";
import "./App.css";
import Key from "./components/Key/Key";

function App() {
  const [display, setDisplay] = useState("0");
  const [history, setHistory] = useState([]);

  const handleKeyClick = (value) => {
    if (display === "0" && value !== ".") {
      setDisplay(value);
      return;
    }
    setDisplay((prevDisplay) => prevDisplay + value);
  };

  const saveHistory = (newHistory) => {
    localStorage.setItem("history", JSON.stringify(newHistory));
  };

  const computeValues = () => {
    try {
      const operation = display;
      const result = eval(display).toFixed(2).toString();
      const newHistory = [...history, operation + "=" + result];
      setDisplay(result);
      setHistory(newHistory);
      saveHistory(newHistory);
    } catch (error) {
      setDisplay("Erro");
    }
  };

  useEffect(() => {
    const storagedLocal = localStorage.getItem("history");
    const parsedLocal = JSON.parse(storagedLocal);
    setHistory(parsedLocal);
  }, []);

  const handleDelete = (index) => {
    let newHistory = history.slice();
    newHistory.splice(index, 1);
    setHistory(newHistory);
    saveHistory(newHistory);
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <h1>{display}</h1>
        </div>
        <div className="keycaps">
          <Key value="7" onClick={handleKeyClick} />
          <Key value="8" onClick={handleKeyClick} />
          <Key value="9" onClick={handleKeyClick} />
          <Key value="+" onClick={handleKeyClick} />
          <Key value="4" onClick={handleKeyClick} />
          <Key value="5" onClick={handleKeyClick} />
          <Key value="6" onClick={handleKeyClick} />
          <Key value="-" onClick={handleKeyClick} />
          <Key value="1" onClick={handleKeyClick} />
          <Key value="2" onClick={handleKeyClick} />
          <Key value="3" onClick={handleKeyClick} />
          <Key value="/" onClick={handleKeyClick} />
          <Key value="." onClick={handleKeyClick} /> 
          <Key value="0" onClick={handleKeyClick} />
          <Key value="=" onClick={computeValues} />
          <Key value="*" onClick={handleKeyClick} />        
          <div>
            <Key value="C" onClick={() => {setDisplay("0");}}/>
          </div>
        </div>
      </div>
      <div>
        {history.map((value, index) => (
          <div style={{ display: "flex", color: "white",  }}>
            <p>
              {index + 1}. {value}
            </p>
            <button onClick={() => {handleDelete(index);}}>
              DELETE
            </button>
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default App;
