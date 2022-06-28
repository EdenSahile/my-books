import React,{useState} from "react";
import { connect } from "react-redux";
import { addBook } from "../redux/actions/actions";

const AddBooksContainer = ({ libraryData, addBook }) => {

  const [newData, setNewData] = useState({
    title: "",
    author: "",
  });

  console.log(libraryData)

  const handleSubmit = (e) => {

    e.preventDefault();

    addBook(newData)
    
    setNewData({
        title:"",
        author:""
    })
};

 
 
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

const mapStateToProps=(state)=>{

    return{

       libraryData:state.library


    }
}

const mapDispatchToProps=(dispatch)=>{

    return{

        
       addBook:(param)=>dispatch(addBook(param))


    }
}


export default connect(mapStateToProps,mapDispatchToProps) (AddBooksContainer);
