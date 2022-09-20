import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/user/:userId" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
