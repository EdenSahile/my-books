import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AddBooksContainer from './Containers/AddBooksContainer';
import SearchBooks from './Containers/SearchBooks.js';

function App() {
  return (
    <div className="App">
      
     <Navbar/>
     <Routes>
       <Route path='/' element={<AddBooksContainer/>}/>
       <Route path='/search' element={<SearchBooks/>}/>
   
     </Routes>
        <Footer/>
        
    </div>
  );
}

export default App;
