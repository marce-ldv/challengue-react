import {
    DOG_SET_DETAILS,
    DOG_SET_LIST,
    DOG_UNSET_DETAILS
} from '../types';

const defaultState = () => ({
    details: '',
    list: []
});

export function dogReducer (state = defaultState(), { type, payload }) {
    switch (type) {

    case DOG_SET_DETAILS:
        return {
            ...state,
            details: payload
        };

    case DOG_SET_LIST:
        return {
            ...state,
            list: payload
        };
    
    case DOG_UNSET_DETAILS:
        return {
            ...state,
            details: ''
        };

    default:
        return state;
    }
}
