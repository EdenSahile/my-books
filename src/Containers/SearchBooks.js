import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {fetchBooks} from '../redux/actions/actionsFetchBooks'
import { addBook} from '../redux/actions/actions';
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
 import FlipMove from "react-flip-move";
  






const SearchBooks = () => {


  const [title, setTitle]=useState('')

  const data=useSelector(state=>state.search)
  console.log(data)
  const dispatch=useDispatch()


  const handleSubmit=(e)=>{
    e.preventDefault(e)
    // console.log(title)
    dispatch(fetchBooks(title))
    setTitle('')

  }


const handleChange=(e)=>{
  setTitle(e.target.value)

}

const handleSave=(title,author)=>{
  dispatch(addBook({title,author}));

  toast.success("📖 Livre enregistré dans la bibliothèque!", {
    position: "bottom-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    theme: "colored",
  });


}


const displayFetchedBooks=data.isLoading ?(
  <div className='d-flex justify-content-center'>
      <div className='spinner-border text-info' role='status'>
        <span className='sr-only'></span>
      </div>
  </div>

):
data.error !== ''?(
  <p>{data.error}</p>

)
: 
(
  data.books.map(item=>{
    console.log(item.id)

    return (
      <div className="card mb-2" key={item.id}>
        <ToastContainer
          position="bottom-right"
          autoClose={1000}
          hideProgressBar={true}
          
        
        />
        <div className="card-header">
          <h4 className="mb-0">
            <button
              className="btn btn-link collapsed text-dark text-decoration-none fs-5"
              data-bs-toggle="collapse"
              data-bs-target={`#b${item.id}`}
              aria-expanded="false"
            >
              {item.volumeInfo.title}
            </button>
          </h4>
          <div
            id={`b${item.id}`}
            className="collapse"
            data-bs-parent="#accordion"
          >
            <div className="card-body">
              {item.volumeInfo.hasOwnProperty("imageLinks") && (
                <img
                  src={item.volumeInfo.imageLinks.thumbnail}
                  alt={item.volumeInfo.title}
                />
              )}
              <br />
              <h4 className="card-title fs-4">
                {" "}
                Titre : {item.volumeInfo.title}
              </h4>
              <h5 className="card-title text-secondary fs-6">
                {" "}
                Auteurs :{item.volumeInfo.authors}
              </h5>
              <br />
              <p className="card-text text-start">
                <strong> Description </strong>: <br />
                <br />
                {item.volumeInfo.description}
              </p>

              <a
                className="btn btn-outline-secondary"
                target="_blank"
                rel="noopener noreferrer"
                href={item.volumeInfo.previewLink}
              >
                Plus d'infos
              </a>

              <button
                className="btn btn-outline-secondary ms-3 "
                onClick={() =>
                  handleSave(item.volumeInfo.title, item.volumeInfo.authors)
                }
              >
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  })

  
)
  return (
    <main role="main">
      <div className="container-fluid">
        <div className="container text-center">
          <h1 className="display-4">BOOKS</h1>
          <p>Indiquer le sujet du livre à rechercher sur Google API</p>

          <form
            className="form-inline justify-content-center"
            onSubmit={handleSubmit}
          >
            <div className="row offset-md-4">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Recherche par titre, auteur"
                  required
                  value={title}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="col-md-3">
                <button className="btn btn-outline-secondary">
                  Rechercher
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
<br/>
      <div className="container" style={{ minHeight: "200px" }}>
         <div id="accordion" >
           <FlipMove>
        {displayFetchedBooks}
        </FlipMove>
        </div>
      </div>
    </main>
  );
}

export default SearchBooks