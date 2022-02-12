import React from 'react'
import './App.scss';
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/pages/Home';


function App() {
  return (
    <>
        <Navbar />
        <Routes>
        
<Route path="/" exact element={<Home/>}/>    

        </Routes>
        <Footer />
    </>
  )
}

export default App