import { Route, Routes } from 'react-router-dom';
import './App.css'
import Homepage from './pages/Homepage';
import Header from './components/Header';
import Razze from './pages/Razze';
import Class from './pages/Class';
import Age from './pages/Age';
import Region from './pages/Regions';
import BirthSign from './pages/BirthSign';


function App() {

  return (
    <>
    <Header></Header>

    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/races' element={<Razze />} />
      <Route path='/classes' element={<Class />} />
      <Route path='/ages' element={<Age />} />
      <Route path='/regions' element={<Region />} />
      <Route path='/birthsigns' element={<BirthSign />} />

    </Routes> 
    </>
  )
}

export default App
