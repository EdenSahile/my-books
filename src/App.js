import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import BibliothequeContainer from './Containers/BibliothequeContainer';
import SearchBooks from './Containers/SearchBooks.js';


function App() {

  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchBooks />} />

        <Route path="/bibliotheque" element={<BibliothequeContainer/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
