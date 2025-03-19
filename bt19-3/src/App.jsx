import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import One from './components/OneParent'; // Import trang OneParent
import Two from './components/Two'; // Import trang Two
import Three from './components/Three'; // Import trang Three

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/OneParent" element={<One />} />
        <Route path="/Two" element={<Two />} />
        <Route path="/Three" element={<Three />} />
      </Routes>
    </Router>
  );
}

export default App;