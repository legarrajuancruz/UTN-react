import { Link } from "react-router-dom";
import "./menu.css";

const menu = () => {
  return (
    <nav className="menu">
      <ul className="menu-list">
        <li className="menu-item">
          <Link to="/" className="menu-link">
            Inicio
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/Casas" className="menu-link">
            Casas
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/Pociones" className="menu-link">
            Pociones
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/Personajes" className="menu-link">
            Personajes
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default menu;
