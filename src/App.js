import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomeApp } from './page/HomeApp';
import { LandingApp } from './page/LandingApp';
import { NavApp } from './components/NavApp';




function App() {
  return (
    <>
      <NavApp />
      <Routes>
        <Route exact path='/' element={<HomeApp />} />
        <Route exact path='/home' element={<HomeApp />} />
        <Route exact path='landing' element={<LandingApp />} />
      </Routes>
    </>
  );
}

export default App;
