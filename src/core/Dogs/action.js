import {
    DOG_GET_DETAILS,
    DOG_GET_LIST,
    DOG_SET_DETAILS,
    DOG_SET_LIST,
    DOG_UNSET_DETAILS
} from '../types';

export function getDogList () {
    return {
        type: DOG_GET_LIST
    };
}

export function getDogDetails (payload) {
    return {
        payload,
        type: DOG_GET_DETAILS
    };
}

export function setDogList (payload) {
    return {
        payload,
        type: DOG_SET_LIST
    };
}

export function setDogDetails (payload) {
    return {
        payload,
        type: DOG_SET_DETAILS
    };
}

export function unsetDogDetails () {
    return {
        type: DOG_UNSET_DETAILS
    };
}
