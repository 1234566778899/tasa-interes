import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomeApp } from './components/HomeApp';
import { NavApp } from './components/NavApp';



function App() {
  return (
    <>
      <NavApp />
      <Routes>
        <Route exact path='/' element={<HomeApp />} />
      </Routes>
    </>
  );
}

export default App;
