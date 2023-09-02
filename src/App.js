import React from 'react'

import NavBar from './Component/Navbar.js';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import Footer from './Component/Footer.js';
import './App.css';
function App() {
  return (
    <>
      
    
    <div className='app'>
    <NavBar/> 
    <SortingVisualizer/>
    <Footer/>

    </div>
   </> );
}

export default App;