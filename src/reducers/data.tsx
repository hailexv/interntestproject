import {GET_EMP_SUCCESS} from "../actions/types";

// @ts-ignore
export default (state = {}, { type, data }) => {
    switch (type) {
        case GET_EMP_SUCCESS:
            return data;
        default:
            return state;
    }
};