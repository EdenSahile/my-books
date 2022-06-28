import {
  FETCH_BOOKS_LOADING,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
} from "../constants";

const initialState={

    isLoading:false,
    books:[],
    error:''
}


const reducerFetchBooks=(state=initialState, action)=>{

    switch (action.type) {
      case FETCH_BOOKS_LOADING:
        return {
          ...state,
          isLoading: true,
        };
      case FETCH_BOOKS_SUCCESS:
        return {
          ...state,
          books: action.payload,
          isLoading: false,
          error:''
        };
      case FETCH_BOOKS_ERROR:
        return {
          ...state,
          books:[],
          error:action.payload,
          isLoading:false
         
        };
      default:
        return state;
    }


}

export default reducerFetchBooks;