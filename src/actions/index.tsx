import {GET_EMP_START} from "./types";
import {GET_EMP_FAIL} from "./types";
import {GET_EMP_SUCCESS} from "./types";
import {Employee} from "./types";
import data from "../reducers/data";

export const REQUEST_DATA_FROM_API = "REQUEST_DATA_FROM_API";
export const RECEIVE_DATA_FROM_API = "RECEIVE_DATA_FROM_API";



export const  getEmployeeStart = () =>({
    type: GET_EMP_START
});

export const  getEmployeeSuccess = (data: Employee[]) =>({
    type: GET_EMP_SUCCESS,
    data
});

export const  getEmployeeFail = (error: Employee[]) =>({
    type: GET_EMP_FAIL,
    data:error
});