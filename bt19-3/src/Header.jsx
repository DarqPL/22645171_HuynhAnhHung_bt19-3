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
          <button>4</button>
        </li>
        <li style={khoangCach}>
          <button>5</button>
        </li>
        <li style={khoangCach}>
          <button>6</button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
