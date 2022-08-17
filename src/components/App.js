import { Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import NavBar from './NavBar';
import Home from '../pages/Home/Home';
// import datas from '../datas/Datas.js';

function App() {
  // console.log(datas.USER_MAIN_DATA[1].id);

  //Condition data mocke ou fetch
  //UtilseFetch
  //DATA (Soit de fetch soit du mock)

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/user/:userId" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

