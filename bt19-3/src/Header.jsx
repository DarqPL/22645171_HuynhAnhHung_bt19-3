import { Link, Route, Router, Routes } from 'react-router-dom';
import './Header.css';

function Header() {
  const khoangCach = { paddingRight: '100px' };

  return (
    <header style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
      <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
        <li style={khoangCach}>
          <Link to="/OneParent">
            <button>1</button>
          </Link>
        </li>
        <li style={khoangCach}>
          <Link to="/Two">
            <button>2</button>
          </Link>
        </li>
        <li style={khoangCach}>
          <Link to="/Three">
            <button>3</button>
          </Link>
        </li>
        <li style={khoangCach}>
        <Link to="/Four">
            <button>4</button>
          </Link>
        </li>
        <li style={khoangCach}>
        <Link to="/Five">
            <button>5</button>
          </Link>
        </li>
        <li style={khoangCach}>
        <Link to="/Six">
            <button>6</button>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
