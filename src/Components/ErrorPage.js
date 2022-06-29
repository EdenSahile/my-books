import React from "react";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
 
    <div class="alert alert-danger mt-4" role="alert">
     Page non trouvée. Retourner sur la page de{" "}
        <Link to="/my-books">Recherche</Link>
    
    </div>
  );
};

export default ErrorPage;
