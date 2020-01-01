import {GET_EMP_SUCCESS,DELETE_EMPLOYEE_ASYNC} from "../actions/types";

const initialState = {
    users: [],
    user: {},
    editMode: false,
    error: false,
    isSaveBtnClicked: false,
    isEditBtnClicked: false,
    edit: false
};

// @ts-ignore
export default (state = initialState, { type, data }) => {
    switch (type) {
        case GET_EMP_SUCCESS:
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