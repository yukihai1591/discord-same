import homeService from "app/services/homeService";
/* LIBRARY */
export const GET_SUBJECT = "GET_SUBJECT";

export const GET_SUBJECT_SUCCESS = "GET_SUBJECT_SUCCESS";
export const GET_SUBJECT_ERROR = "GET_SUBJECT_ERROR";

export function getSubjectHomeSuccess(data) {
    return (dispatch) => {
        dispatch({
            type: GET_SUBJECT_SUCCESS,
            payload: data
        });
    };
}

export function getSubjectHomeError(error) {
    return (dispatch) => {
        dispatch({
            type: GET_SUBJECT_ERROR,
            payload: error,
        });
    };
}

export function getSubjectHome(params) {
    return (dispatch) => {
        dispatch({
            type: GET_SUBJECT,
        });

        homeService
            .searchSubject(params)
            .then((props) => {
                return dispatch(getSubjectHomeSuccess(props));
            })
            .catch((error) => {
                return dispatch(getSubjectHomeError(error));
            });
    };
}
