import { ADD_BOOK, DELETE_BOOK, DELETE_ALL_BOOKS } from "../constants";
import { v4 as uuiv4 } from "uuid";

const initialState={
   
    books:[]
}

const helperAddData=(action)=>{
    return {
      id: uuiv4(),
      title: action.payload.title,
      author: action.payload.author,
    };
}

const removeDataById=(state,id)=>{

const booksFiltered=state.filter(book=>{
    return book.id !== id;

})
return booksFiltered;
  


}


const reducerAddBooks=(state=initialState.books, action)=>{

    if(localStorage.getItem("booksData")) {
      state = JSON.parse(localStorage.getItem("booksData"));
    }



    switch (action.type) {

        case ADD_BOOK:
            state=[...state, helperAddData(action)]
            localStorage.setItem("booksData",JSON.stringify(state));
            return state;
        
        case DELETE_BOOK:
            state= removeDataById(state,action.payload)
            localStorage.setItem("booksData",JSON.stringify(state))
            return state

        case DELETE_ALL_BOOKS:
            state=[]
            localStorage.setItem("booksData", JSON.stringify(state));
            return  state
            
        default:
            return state
    }

   
}
export default reducerAddBooks