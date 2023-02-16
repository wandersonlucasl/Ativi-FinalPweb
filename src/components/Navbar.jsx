import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>
        <Link to= {'/'}>Blog</Link>
      </h2>
      <ul>
        <li>
          <Link to= {'/'}>Posts</Link>
        </li>
        <li>
          <Link to= {'/fotos'} className= "new-btn">Imagens</Link>
        </li>
        <li>
          <Link to= {'/users'}>Usuarios</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar