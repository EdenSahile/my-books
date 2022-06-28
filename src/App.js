import React from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AddBooksContainer from './Containers/AddBooksContainer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <AddBooksContainer/>
     <Footer/>
    </div>
  );
}

export default App;
