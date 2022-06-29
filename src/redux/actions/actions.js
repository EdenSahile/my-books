import {
  ADD_BOOK,
  DELETE_BOOK,
  DELETE_ALL_BOOKS,
} from "../constants";

export const addBook=(data)=>{
    return{
        type:ADD_BOOK,
        payload:data
    }
}

export const deletBook=(id)=>{
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





