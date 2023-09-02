import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomeApp } from './page/HomeApp';
import { LandingApp } from './page/LandingApp';
import { NavApp } from './components/NavApp';
import { ComentApp } from './page/ComentApp';

function App() {
  return (
    <>
      <NavApp />
      <Routes>
        <Route exact path='/' element={<HomeApp />} />
        <Route exact path='/home' element={<HomeApp />} />
        <Route exact path='/landing' element={<LandingApp />} />
        <Route exact path='/comentarios' element={<ComentApp />} />
      </Routes>
    </>
  );
}

export default App;
