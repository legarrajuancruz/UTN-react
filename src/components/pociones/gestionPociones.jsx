import { useState, useEffect } from "react";
import ListaPociones from "./listaDePociones";
import FormularioPociones from "./formularioPociones";

const GestionPociones = () => {
  const [pociones, setPociones] = useState([]);

  useEffect(() => {
    const pocionesGuardadas = JSON.parse(localStorage.getItem("pociones"));
    if (pocionesGuardadas) {
      setPociones(pocionesGuardadas);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("pociones", JSON.stringify(pociones));
  }, [pociones]);

  const agregarPocion = (nombre) => {
    const nuevaPocion = {
      id: Date.now(),
      nombre,
      completada: false,
    };
    setPociones([...pociones, nuevaPocion]);
  };

  const completarPocion = (id) => {
    const nuevasPociones = pociones.map((pocion) =>
      pocion.id === id ? { ...pocion, completada: !pocion.completada } : pocion
    );
    setPociones(nuevasPociones);
  };

  const eliminarPocion = (id) => {
    const nuevasPociones = pociones.filter((pocion) => pocion.id !== id);
    setPociones(nuevasPociones);
  };

  return (
    <div>
      <h1>Gestion Pociones</h1>
      <FormularioPociones agregarPocion={agregarPocion} />
      <ListaPociones
        pociones={pociones}
        completarPocion={completarPocion}
        eliminarPocion={eliminarPocion}
      />
    </div>
  );
};

export default GestionPociones;
