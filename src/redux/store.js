import { legacy_createStore as createStore,combineReducers, applyMiddleware, compose } from "redux";
import reducerAddBooks from "./reducers/reducerAddBooks";
import reducerFetchBooks from './reducers/reducerFetchBooks'
import thunk from 'redux-thunk'


const rootReducer=combineReducers({

    library: reducerAddBooks,
    search: reducerFetchBooks
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)


export default store;

