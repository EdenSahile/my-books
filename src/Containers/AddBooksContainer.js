import React,{useState} from "react";
import { connect } from "react-redux";
import { addBook,deleteBook } from "../redux/actions/actions";
import FlipMove from "react-flip-move";

const AddBooksContainer = ({ libraryData, addBook, deleteBook }) => {
  const [newData, setNewData] = useState({
    title: "",
    author: "",
  });

  console.log(libraryData);

  const handleSubmit = (e) => {
    e.preventDefault();

    addBook(newData);

    setNewData({
      title: "",
      author: "",
    });
  };

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
              onClick={()=>deleteBook(data.id)}
              >X</span>
            </li>
          );
        })}
      </FlipMove>
    ) : (
      <p className="text-center">Aucune data à afficher</p>
    );

  const deletedAllBooks = libraryData.length > 0 && (
    <button 
    className="btn btn-danger mt-4 mb-5">
      Effacer tous les livres
    </button>
  );

  return (
    <main role="main">
      <div className="container-fluid">
        <div className="container text-center">
          <h1 className="display-4">BOOKS</h1>
          <p>Ajouter un livre à votre bibliothèque</p>

          <form
            className="form-inline justify-content-center"
            onSubmit={handleSubmit}
          >
            <div className="row offset-md-4">
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Titre"
                  value={newData.title}
                  onChange={(e) =>
                    setNewData({ ...newData, title: e.target.value })
                  }
                  required
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control  "
                  placeholder="Auteur"
                  value={newData.author}
                  onChange={(e) =>
                    setNewData({ ...newData, author: e.target.value })
                  }
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
       deleteBook:(id)=>dispatch(deleteBook(id))



    }
}


export default connect(mapStateToProps,mapDispatchToProps) (AddBooksContainer);
