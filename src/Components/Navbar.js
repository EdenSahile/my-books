import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
   return (
     <header>
       <div className="d-flex flex-column justify-content-between flex-md-row p-3 border-bottom bg-dark text-white">
         <h4 className="mr-md-auto">
           <a href="/" className="text-decoration-none text-white">
             {" "}
             BOOKS
           </a>
         </h4>
         <nav className="btn-group">
           <Link to="/bibliotheque" className="btn btn-light">
             bibliotheque
           </Link>
           &nbsp;
           <Link to="/" className="btn btn-light">
             Rechercher
           </Link>
         </nav>
       </div>
     </header>
   );
}

export default Navbar