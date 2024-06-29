import "./pociones.css";
import Pocion from "./pocion";

const ListaDePociones = ({ pociones, completarPocion, eliminarPocion }) => {
  return (
    <div className="pocionNueva">
      <h2> Invetario de Pociones </h2>
      {pociones.map((pocion) => (
        <Pocion
          key={pocion.id}
          pocion={pocion}
          completarPocion={completarPocion}
          eliminarPocion={eliminarPocion}
        />
      ))}
    </div>
  );
};
export default ListaDePociones;
