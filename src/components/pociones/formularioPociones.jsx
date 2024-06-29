import { useState } from "react";

const formularioPociones = ({ agregarPocion }) => {
  const [nuevaPocion, setNuevaPocion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nuevaPocion.trim() !== "") {
      agregarPocion(nuevaPocion), setNuevaPocion("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nuevaPocion}
        onChange={(e) => setNuevaPocion(e.target.value)}
        placeholder="Nueva Pocion"
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default formularioPociones;
