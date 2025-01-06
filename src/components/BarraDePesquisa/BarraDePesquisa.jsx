import React from "react";
import "./BarraDePesquisa.css";

function BarraDePesquisa({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search contacts..."
      onChange={onSearch}
      className="barra-de-pesquisa"
    />
  );
}

export default BarraDePesquisa;
