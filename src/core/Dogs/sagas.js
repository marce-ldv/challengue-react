import { call, put } from 'redux-saga/effects';
import { getDetails, getList } from './services';
import { setDogDetails, setDogList } from './action';

export function* getDogDetails ({ payload: params }) {
    try {
        const data = yield call(getDetails, params);
        yield put(setDogDetails(data));
    } catch (e) {
        console.error(e);
    }
}

export function* getDogList () {
    try {
        const data = yield call(getList);
        yield put(setDogList(data));
    } catch (e) {
        console.error(e);
    }
}
