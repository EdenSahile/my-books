import {ADD_BOOK} from '../constants';
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

const reducerAddBooks=(state=initialState.books, action)=>{

    if(localStorage.getItem("booksData")) {
      state = JSON.parse(localStorage.getItem("booksData"));
    }



    switch (action.type) {

      case ADD_BOOK:
       
        state=[...state, helperAddData(action)]
            localStorage.setItem("booksData",JSON.stringify(state));
            return state;
           
        default:
            return state
    }

   
}
export default reducerAddBooks