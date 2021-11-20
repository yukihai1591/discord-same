/* LIBRARY */
import * as Actions from "../../actions/home/index";

const initialState = {
    subject: [],
    submitting: false,
    searchSuccess: false,
    searchError: null,
};

const home = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_SUBJECT: {
            return {
                ...state,
                searchSuccess: false,
                searchError: null,
                submitting: true,
            }
        }
        case Actions.GET_SUBJECT_SUCCESS: {
            return {
                ...state,
                searchSuccess: true,
                searchError: null,
                subject: action.payload,
                submitting: false,
            };
        }

        case Actions.GET_SUBJECT_ERROR: {
            return {
                ...state,
                searchError: action.payload,
                searchSuccess: false,
                subject: [],
                submitting: false,
            };
        }
        default: {
            return state;
        }
    }
};

export default home;
