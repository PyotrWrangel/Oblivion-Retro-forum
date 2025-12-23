import { Route, Routes } from 'react-router-dom';
import './App.css'
import Homepage from './pages/Homepage';
import Header from './components/Header';
import Razze from './pages/Razze';


function App() {

  return (
    <>
    <Header></Header>

    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/races' element={<Razze />} />
      {/* 
      <Route path='/' element={<HomePage />} />
      <Route path='/' element={<HomePage />} />
      <Route path='/' element={<HomePage />} />
      <Route path='/' element={<HomePage />} />
      <Route path='/' element={<HomePage />} />
      <Route path='/' element={<HomePage />} />
      <Route path='/' element={<HomePage />} />
      <Route path='/' element={<HomePage />} /> */}
    </Routes> 
    </>
  )
}

export default App
