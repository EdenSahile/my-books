import {ADD_BOOK} from '../constants'

const initialState={
   
    books:[]
}

const reducerAddBooks=(state=initialState, action)=>{

    switch (action.payload) {
      case ADD_BOOK:
        return{
            ...state,
            books:action.payload
           

        }
    default:
        return state
    }

   
}