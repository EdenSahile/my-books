import {
  ADD_BOOK,
  DELETE_BOOK,
  DELETE_ALL_BOOKS,
  FETCH_BOOKS_LOADING,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR
} from "../constants";

export const addBook=(data)=>{
    return{
        type:ADD_BOOK,
        payload:data
    }
}

export const deleteBook=(id)=>{
    return{
        type:DELETE_BOOK,
        payload:id
    }
}

export const deleteAllBooks = () => {
  return {
    type: DELETE_ALL_BOOKS,
  };
};





