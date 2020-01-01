export const GET_EMP_START :string = "GET_EMP_START";
export const GET_EMP_SUCCESS:string = "GET_EMP_SUCCESS";
export const GET_EMP_FAIL:string = "GET_EMP_FAIL";
export const DELETE_EMP_START:string = "DELETE_EMP_START"
export const DELETE_EMP_SUCCESS:string = "DELETE_EMP_SUCCESS"
export const ADD_EMPLOYEE_BUTTON_CLICKED = 'ADD_EMPLOYEE_BUTTON_CLICKED';
export const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export const EDIT_MODE = "EDIT_MODE";
export const EDIT_EMPLOYEE = "EDIT_EMPLOYEE";
export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";
export const DELETE_EMPLOYEE_ASYNC = "DELETE_USER_ASYNC";
export interface Employee {
    id: string;
    employee_name: string;
    employee_salary: string;
    employee_age: string;
    profile_image: string;
}
