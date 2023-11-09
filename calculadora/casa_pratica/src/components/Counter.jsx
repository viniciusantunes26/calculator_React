import React, { useEffect, useState } from "react";

export default function Counter() {
  const [numero, setNumero] = useState(0);

  const handleAddNumber = () => {
    setNumero(numero + 1);
  };

  const handleMinusNumber = () => {
    setNumero(numero - 1);
  };

  const handleResetNumber = () => {
    setNumero(0);
  };

  return (
    <div>
      <p>Contador: {numero}</p>
      <div>
        <button onClick={handleMinusNumber}>-</button>
        <button onClick={handleResetNumber}>RESET</button>
        <button onClick={handleAddNumber}>+</button>
      </div>
    </div>
  );
}
