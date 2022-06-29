import React from 'react'
import {Routes, Route} from 'react-router-dom'

import "./App.css";

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import BibliothequeContainer from './Containers/BibliothequeContainer';
import SearchBooksContainer from "./Containers/SearchBooksContainer.js";
import ErrorPage from './Components/ErrorPage'


function App() {

  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/my-books" element={<SearchBooksContainer />} />

        <Route path="/bibliotheque" element={<BibliothequeContainer />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
