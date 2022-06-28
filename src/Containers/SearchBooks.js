import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {fetchBooks} from '../redux/actions/actionsFetchBooks'


const SearchBooks = () => {


  const [title, setTitle]=useState('')

  const data=useSelector(state=>state.search)
  console.log(data)
  const dispatch=useDispatch()


  const handleSubmit=(e)=>{
    e.preventDefault(e)
    // console.log(title)
    dispatch(fetchBooks(title))

  }


const handleChange=(e)=>{
  setTitle(e.target.value)

}



const displayFetchedBooks=data.isLoading ?(
  <div className='d-flex justify-content-center'>
      <div className='spinner-border text-info' role='status'>
        <span className='sr-only'>Loading ...</span>
      </div>
  </div>

):
data.error !== ''?(
  <p>{data.error}</p>

)
:
(
  data.books.map(item=>{

    return (
      <div className="accordion" key={item.id}>
        <div className="card mb-2">
          <div className="card-header">
            <h5 className="mb-0">
              <button
                className="btn btn-link collapsed"
                data-toggle="collapse"
                data-target={`#${item.id}`}
                aria-expanded="false"
              >
                {item.volumeInfo.title}
              </button>
            </h5>
            <div id={item.id} className="collapse" data-parent="accordion">
              <div className="card-body">

                {item.volumeInfo.hasOwnProperty('imageLinks') &&
                <img src={item.volumeInfo.imageLinks.thumbnail}
                  alt={item.volumeInfo.title}
                />

                }
                
                <br />
                <h4 className="card-title"> Titre : {item.volumeInfo.title}</h4>
                <h5 className="card-title">
                  {" "}
                  Auteurs :{item.volumeInfo.authors}
                </h5>
                <p className="card-text">
                  Description :{item.volumeInfo.description}
                </p>
                <a
                  className="btn btn-outline-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.volumeInfo.previewLink}
                >
                  Plus d'infos
                  <button className='btn btn-outline-secondary'>Enregistrer</button>
                </a>
              </div>
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
                  placeholder="Votre recherche"
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

      <div className="container" style={{ minHeight: "200px" }}>
        {displayFetchedBooks}
      </div>
    </main>
  );
}

export default SearchBooks