// import React,{useState} from "react";
import React from "react";
import { connect } from "react-redux";
import { addBook,deleteBook,deleteAllBooks } from "../redux/actions/actions";
import FlipMove from "react-flip-move";

const BibliothequeContainer = ({
  libraryData,
  addBook,
  deleteBook,
  deletAll,
}) => {


  const displayData =
    libraryData.length > 0 ? (
      <FlipMove>
        {libraryData.map((data) => {
          return (
            <li
              key={data.id}
              className="list-group-item list-group-light d-flex justify-content-between"
            >
              <span>
                <strong>Title:</strong>
                {data.title}
              </span>
              <span>
                <strong>Auteur:</strong>
                {data.author}
              </span>
              <span
                className="btn btn-danger"
                onClick={() => deleteBook(data.id)}
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

  const deletedAllBooks = libraryData.length > 0 && (
    <button className="btn btn-danger mt-4 mb-5" onClick={() => deletAll()}>
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

const mapStateToProps=(state)=>{

    return{

       libraryData:state.library


    }
}

const mapDispatchToProps=(dispatch)=>{

    return{

        
       addBook:(param)=>dispatch(addBook(param)),
       deleteBook:(id)=>dispatch(deleteBook(id)),
       deletAll:()=>dispatch(deleteAllBooks())



    }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BibliothequeContainer);
