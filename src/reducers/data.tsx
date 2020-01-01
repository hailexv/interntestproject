import {GET_EMP_SUCCESS,DELETE_EMPLOYEE_ASYNC,GET_SINGLE_EMP_SUCCESS} from "../actions/types";

const initialState :{users?: Array<object>, user?:object} = {
    users: [],
    user: {}
};

// @ts-ignore
export default (state = initialState, { type, data }) => {
    switch (type) {
        case GET_EMP_SUCCESS:
            return data;
        case GET_SINGLE_EMP_SUCCESS:
            return data;
        case DELETE_EMPLOYEE_ASYNC:
            console.log('good as hell');
            // return {
            //     users: state.users.filter(user => user.id !== action.payload),
            //     edit: false
            // };

        default:
            return state;
    }
};