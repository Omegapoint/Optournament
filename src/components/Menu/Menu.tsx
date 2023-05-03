import { NavLink, Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <ul className="navbar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/tabletennis">Pingis</Link>
      </li>
      <li>
        <Link to="/pool">Biljard</Link>
      </li>
    </ul>
  );
};

export default Menu;
