import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/Navigation.css';

/**
 * @component
 * @returns { reactComponent }
 */
function NavBar() {
  return (
    <nav className="nav">
      <img className="logo" src={logo} alt="logo du site" />
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Accueil
        </Link>
        <Link to="/" className="nav-link">
          Profil
        </Link>
        <Link to="/" className="nav-link">
          Réglage
        </Link>
        <Link to="/" className="nav-link">
          Communauté
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
