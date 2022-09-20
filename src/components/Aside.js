import { Link } from 'react-router-dom';
import '../styles/Aside.css';
import yoga from '../assets/yoga.svg';
import swimming from '../assets/swimming.svg';
import bike from '../assets/bike.svg';
import dumbble from '../assets/dumbble.svg';

/**
 * Display left sidebar
 * @component
 * @returns {reactComponent}
 */

function Aside() {
  return (
    <div className="aside-container">
      <nav className="aside-nav">
        <Link to="/" className="aside-link">
          <img src={yoga} alt="icone yoga" />
        </Link>
        <Link to="/" className="aside-link">
          <img src={swimming} alt="icone swimming" />
        </Link>
        <Link to="/" className="aside-link">
          <img src={bike} alt="icone vélo" />
        </Link>
        <Link to="/" className="aside-link">
          <img src={dumbble} alt="icone haltère" />
        </Link>
      </nav>
      <p>Copyright, SporSee 2020</p>
    </div>
  );
}

export default Aside;
