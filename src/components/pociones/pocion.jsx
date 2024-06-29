import "./pociones.css";

const Pocion = ({ pocion, completarPocion, eliminarPocion }) => {
  const { id, nombre, completada } = pocion;

  const completar = () => {
    completarPocion(id);
  };

  const eliminar = () => {
    eliminarPocion(id);
  };

  return (
    <div className="pocion">
      <p className={completada ? "completada" : ""}>{nombre}</p>
      <button onClick={completar}>
        {completada ? "completada" : "pediente"}
      </button>
      <button onClick={eliminar}>Eliminar</button>
    </div>
  );
};

export default Pocion;
