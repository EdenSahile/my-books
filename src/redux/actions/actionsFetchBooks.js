import axios from "axios";
import {
  FETCH_BOOKS_LOADING,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
} from "../constants";


export const fetchBooksLoading = () => {
  return {
    type: FETCH_BOOKS_LOADING
}

}

export const fetchBooksSuccess = (data) => {
  return {
    type:  FETCH_BOOKS_SUCCESS,
    payload:data
}
}

export const fetchBooksError = (error) => {
  return {
    type: FETCH_BOOKS_ERROR,
    payload: error,
  };
};


const GOOGLE_API_KEY = "AIzaSyB4TrWM8mW6r_paciFUfEthtWVnVTpnfng"; 

 
export const fetchBooks=(title)=>{

return dispatch =>{

    dispatch(fetchBooksLoading());

    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${GOOGLE_API_KEY}&maxResults=20`)
    .then(res=>{
        dispatch(fetchBooksSuccess(res.data.items));
        console.log(res.data.items)
    })
    .catch(error=>{
        dispatch(fetchBooksError(error.message));
        console.log(error.message)
    })


}
    
}