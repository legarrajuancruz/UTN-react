import "./personajes.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPersonajesById } from "./api";

const detallePersonaje = () => {
  const { id } = useParams();
  console.log(id);

  const [personaje, setPersonaje] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataPersonaje = async () => {
      try {
        const data = await fetchPersonajesById(id);
        setPersonaje(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        // setLoading(false);
      }
    };
    fetchDataPersonaje();
  }, [id]);

  return (
    <div>
      <h2>Detalle Personaje</h2>
      {loading ? (
        <p>Cargando personaje</p>
      ) : (
        <ul>
          {personaje.map((personajeid) => (
            <li className="personajes" key={personajeid.name}>
              <h3>{personajeid.name}</h3>
              <p>casa: {personajeid.house}</p>
              <p>Actor: {personajeid.actor}</p>
              <p>Genero:{personajeid.gender}</p>
              <p>Especie:{personajeid.species}</p>
              <Link to={`/Personajes`}>Volver</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default detallePersonaje;
