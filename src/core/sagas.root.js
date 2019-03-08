import { DOG_GET_DETAILS, DOG_GET_LIST } from './types';
import { all, takeEvery } from 'redux-saga/effects';
import { getDogDetails, getDogList } from './Dogs/sagas';

function* rootSagas () {
    yield all([
        takeEvery(DOG_GET_DETAILS, getDogDetails),
        takeEvery(DOG_GET_LIST, getDogList)
    ]);
}

export default rootSagas;
