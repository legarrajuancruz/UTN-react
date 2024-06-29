import Casa from "./casa";
import casas from "./datosCasas";

const listaCasas = () => {
  return (
    <div>
      {casas.map((casa, index) => (
        <Casa
          key={index}
          nombre={casa.nombre}
          valores={casa.valores}
          animal={casa.animal}
          color={casa.color}
          ubicacion={casa.ubicacion}
          imagen={casa.imagen}
        />
      ))}
    </div>
  );
};
export default listaCasas;
