import { ADD_BOOK, DELETE_BOOK } from "../constants";

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