import React,{ useSelector, useDispatch } from "react-redux";
import { deletBook, deleteAllBooks } from "../redux/actions/actions";
import FlipMove from "react-flip-move";

const BibliothequeContainer = () => {

  const data = useSelector((state) => state.library);
  const dispatch = useDispatch();

  const handledeleteBook = (id) => {
    dispatch(deletBook(id));
  };
  const handledeleteAllBooks = () => {
      dispatch(deleteAllBooks());
    };
    
  const displayData =
    data.length > 0 ? (
      <FlipMove>
        {data.map((item) => {
          return (
            <li
              key={item.id}
              className="list-group-item list-group-light d-flex justify-content-between"
            >
              <span>
                <strong>Title:</strong>
                {item.title}
              </span>
              <span>
                <strong>Auteur:</strong>
                {item.author}
              </span>
              <span
                className="btn btn-danger"
             
                onClick={() => handledeleteBook(item.id)}
              >
                X
              </span>
            </li>
          );
        })}
      </FlipMove>
    ) : (
      <p className="text-center">Aucune livre à afficher</p>
    );
  const deletedAllBooks = data.length > 0 && (
    <button
      className="btn btn-danger mt-4 mb-5"
      onClick={() => handledeleteAllBooks()}
    >
      Effacer tous les livres
    </button>
  );
  return (
    <main role="main">
      <div className="container-fluid">
        <div className="container text-center">
          <h1 className="display-4">Ma bibliothèque</h1>
          <p>Ajouter un livre à votre bibliothèque</p>
        </div>
      </div>
      <br />
      <div className="container" style={{ minHeight: "200px" }}>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">{displayData}</ul>
            <div className="d-flex justify-content-center">
              {deletedAllBooks}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default BibliothequeContainer;
