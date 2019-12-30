import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {getEmployeeSuccess} from "./actions";
import {GET_EMP_START} from "./actions/types";
import {fetchData} from "./apis";



function* getApiData(action) {
    try {
        const data = yield call(fetchData);

        console.log("saga", data);
        yield put(getEmployeeSuccess(data));

    } catch (e) {
        console.log(e);
    }
}

export default function* mySaga() {

    yield takeLatest(GET_EMP_START, getApiData);
}
