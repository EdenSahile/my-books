import {ADD_BOOK} from '../constants';
import { v4 as uuidv4 } from "uuid";

const initialState={
   
    books:[]
}

const helperAddData=(action)=>{
    return{

        id:uuidv4(),
        title:action.payload.title,
        author:action.payload.author,
         
    }
}

const reducerAddBooks=(state=initialState.books, action)=>{

    switch (action.payload) {
      case ADD_BOOK:
       
            state=[...state, helperAddData(action)]
            return state;
           
        default:
        return state
    }

   
}
export  default reducerAddBooks