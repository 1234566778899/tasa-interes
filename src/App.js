import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomeApp } from './components/HomeApp';
import { NavApp } from './components/NavApp';
import { LandingApp } from './components/LandingApp';



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
