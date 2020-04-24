import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducer/RootReducer'   

export default () => {
    const store=createStore(RootReducer,applyMiddleware(thunk));
    return store;
};
