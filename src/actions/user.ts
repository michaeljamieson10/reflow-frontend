import { API_ROOT, CALL_API, Schemas } from '../middleware/api';
import { LOCAL_STORAGE_ACCESS_TOKEN_KEY } from "./oauth";

export const LOGGED_IN_USER_INFO = 'LOGGED_IN_USER_INFO';
export const LOGGED_IN_USER_INFO_SUCCESS = 'LOGGED_IN_USER_INFO_SUCCESS';
export const LOGGED_IN_USER_INFO_FAILURE = 'LOGGED_IN_USER_INFO_FAILURE';

// Get the info about the logged in user
const getLoggedInUser = () => ({
    [CALL_API]: {
        httpAction: 'GET',
        types: [LOGGED_IN_USER_INFO, LOGGED_IN_USER_INFO_SUCCESS, LOGGED_IN_USER_INFO_FAILURE],
        endPoint: 'user',
        schema: Schemas.USER
    }
});

export const updateLoggedInUserInfo = () => (dispatch:any) => {
    return dispatch(getLoggedInUser());
};


