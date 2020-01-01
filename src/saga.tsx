import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {getEmployeeStart, getEmployeeSuccess} from "./actions";
import {deleteEmployeeSuccess} from "./actions";
import {GET_EMP_START,DELETE_EMPLOYEE_ASYNC} from "./actions/types";
import {DELETE_EMP_START} from "./actions/types";
import {fetchData} from "./apis";
import {deleteEmployeeById} from "./apis";
import axios from "axios";
import {
    ADD_EMPLOYEE,
    EDIT_EMPLOYEE,
    DELETE_EMPLOYEE
} from "./actions/types";




function* getApiData(action) {
    try {
        const data = yield call(fetchData);

        console.log("saga", data);
        yield put(getEmployeeSuccess(data));

    } catch (e) {
        console.log(e);
    }
}

export function* deleteUserAsync(action) {
    console.log('go');
    console.log('good as hell' + action.payload);
    //axios.delete("http://dummy.restapiexample.com/api/v1/delete/" + action.payload);

    yield call(fetch, `http://dummy.restapiexample.com/api/v1/delete/${action.payload}`,{
        method: "DELETE",
    });



    //yield put({ type: DELETE_EMPLOYEE_ASYNC, payload: action.payload });
}

function* deleteEmployee (action,{ id }) {
    try {

        //const newData = yield call(deleteEmployeeById,id);
        console.log("saga");
        //yield put(deleteEmployeeSuccess(id));

    } catch (e) {

    }
}



export default function* mySaga() {
    yield takeLatest(GET_EMP_START, getApiData);
    yield takeLatest(DELETE_EMPLOYEE, deleteUserAsync);
}


