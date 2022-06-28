import React from "react";
const AddBooksContainer = () => {

  return (
    <main role="main">
      <div className="container-fluid">
        <div className="container text-center">
          <h1 className="display-4">BOOKS</h1>
          <p>Ajouter un livre à votre bibliothèque</p>

          <form className="form-inline justify-content-center">
            <div className="row offset-md-4">
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Titre"
                  required
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control  "
                  placeholder="Auteur"
                  required
                />
              </div>

              <div className="col-md-3">
                <button className="btn btn-outline-secondary">
                  Ajouter un livre
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="container" style={{ minHeight: "200px" }}>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              <li>liste livres</li>
            </ul>
            <div className="d-flex justify-content-center">
              <button className="btn btn-danger mt-4 mb-5">
                Effacer tous les livres
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddBooksContainer;
