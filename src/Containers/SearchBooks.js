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


  return (
    <main role="main">
      <div className="container-fluid">
        <div className="container text-center">
          <h1 className="display-4">BOOKS</h1>
          <p>Indiquer le sujet du livre à rechercher sur Google API</p>

          <form className="form-inline justify-content-center" onSubmit={handleSubmit}>
            <div className="row offset-md-4">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Votre recherche"
                  required
                  value={title}
                  onChange={(e)=>handleChange(e)}
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
        <div className='accordion'>
          <div className='card mb-2'>
            <div className='card-header'>
              <div className='collapse' data-parent='accordion'>
                <div className='card-body'>
                  {/* 
                  -image si on a
                  - titre du livre
                  -description
                  -btn plus d'infos
                  - btn enregistrer
                   */}
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </main>
  );
}

export default SearchBooks