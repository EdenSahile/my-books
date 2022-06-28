import { ADD_BOOK } from "../constants";

export const addBook=(data)=>{
    return{
        type:ADD_BOOK,
        payload:data
    }
}