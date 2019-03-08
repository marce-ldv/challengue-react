import { combineReducers } from 'redux';
import { dogReducer } from './Dogs/reducer';
import { routerReducer } from 'react-router-redux';

export default function rootReducer () {
    return combineReducers({
        dogs: dogReducer,
        router: routerReducer
    });
}
