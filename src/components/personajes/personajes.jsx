import "./personajes.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPersonajes } from "./api";

const personajes = () => {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPersonajes();
        setPersonajes(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Lista personajes</h2>
      <p> Listado personajes</p>
      {loading ? (
        <p>Cargando pesonajes</p>
      ) : (
        <ul>
          {personajes.map((personaje) => (
            <li className="personajes" key={personaje.name}>
              <h3>{personaje.name}</h3>
              <p>casa: {personaje.house}</p>
              <p>Actor: {personaje.actor}</p>
              <Link to="/Personajedetalle">Ver Detalles</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default personajes;
