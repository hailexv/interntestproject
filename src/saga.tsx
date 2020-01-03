import { call, put, takeEvery, takeLatest, apply } from 'redux-saga/effects';
import {getEmployeeStart, getEmployeeSuccess,getSingleEmployeeSuccess} from "./actions";
import {deleteEmployeeSuccess} from "./actions";
import {GET_EMP_START,DELETE_EMPLOYEE_ASYNC} from "./actions/types";
import {DELETE_EMP_START} from "./actions/types";
import {fetchData,fetchSingleEmployee} from "./apis";
import axios from "axios";
import {
    ADD_EMPLOYEE,
    EDIT_EMPLOYEE,
    DELETE_EMPLOYEE,
    GET_SINGLE_EMP
} from "./actions/types";
import {string} from "prop-types";




function* getApiData(action) {
    try {
        const data = yield call(fetchData);

        console.log("users are", data);

        yield put(getEmployeeSuccess(data));

    } catch (e) {
        console.log(e);
    }
}

export function* addNewEmployee(action) {

    //console.log(JSON.stringify(action.payload));
    yield call(fetch, "http://dummy.restapiexample.com/api/v1/create", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(action.payload)
    });

    yield put({type: GET_EMP_START});

}

export function* editEmployee(action) {

    //console.log(JSON.stringify(action.payload));
    console.log('got em' + action.payload.id);

    let employeeToBeUpdated = {
        name: action.payload.name,
        salary: action.payload.salary,
        age: action.payload.age
    }

    yield call(fetch, `http://dummy.restapiexample.com/api/v1/update/${action.payload.id}`, {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(employeeToBeUpdated),
    });

    yield put({type: GET_EMP_START});

}

export function*  getSingleEmployee(action) {

     const fetchSingleEmployee = async() => {
        try{
            const response = await fetch(`http://dummy.restapiexample.com/api/v1/employee/` + action.payload);
            const data = await response.json();

            return data;
        } catch (e) {
            console.log(e);
        }
    }

    const singleEmployee = yield call(fetchSingleEmployee);

    yield put(getSingleEmployeeSuccess(singleEmployee));



        //yield put(getEmployeeSuccess(data));




    //let extracted = yield apply(data, data.json);


}

export function* deleteUserAsync(action) {
    console.log('go');
    console.log('good as hell' + action.payload);
    //axios.delete("http://dummy.restapiexample.com/api/v1/delete/" + action.payload);

    yield call(fetch, `http://dummy.restapiexample.com/api/v1/delete/${action.payload}`,{
        method: "DELETE",
    });

    yield put({type: GET_EMP_START});

    //yield put({ type: DELETE_EMPLOYEE_ASYNC, payload: action.payload });
}

// function* deleteEmployee (action,{ id }) {
//     try {
//
//         //const newData = yield call(deleteEmployeeById,id);
//         console.log("saga");
//         //yield put(deleteEmployeeSuccess(id));
//
//     } catch (e) {
//
//     }
// }



export default function* mySaga() {
    yield takeLatest(GET_EMP_START, getApiData);
    yield takeLatest(DELETE_EMPLOYEE, deleteUserAsync);
    yield takeLatest(ADD_EMPLOYEE, addNewEmployee);
    yield takeLatest(GET_SINGLE_EMP,getSingleEmployee);
    yield takeLatest(EDIT_EMPLOYEE,editEmployee)
}


