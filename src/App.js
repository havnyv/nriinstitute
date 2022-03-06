import React from 'react'
import './App.scss';
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

// pages 
import Home from './components/pages/Home';
import Academics from './components/pages/Academics/Academics'


function App() {
  return (
    <>
        <Navbar />
        <Routes>
        
<Route path="/" exact element={<Home/>}/>    
<Route path="/academics" exact element={<Academics/>}/>    

        </Routes>
        <Footer/>
    </>
  )
}

export default App