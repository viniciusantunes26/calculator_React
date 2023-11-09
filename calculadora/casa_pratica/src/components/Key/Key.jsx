import React, { useState } from "react";
import "./styles.css";

export default function Key({ value, width = 50, height = 50, onClick }) {
  const handleClick = () => {
    onClick(value);
  };

  return (
    <button
      className="key"
      onClick={handleClick}
      style={{ width: width + "px", height: height + "px" }}>
      {value}
    </button>
  );
}