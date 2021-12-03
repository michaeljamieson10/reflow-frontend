import {API_HOST} from "../middleware/api";
import base64 from 'base-64';
import qs from 'query-string';
import {logException} from "./apiUIHelperActions";
import { history } from '../index'
import {updateLoggedInUserInfo} from "./user";

export const LOCAL_STORAGE_ACCESS_TOKEN_KEY = 'accessToken';
export const LOCAL_STORAGE_ACCESS_TOKEN_TYPE = 'accessTokenType';
export const ACCESS_TOKEN_TYPES = {
    user: 'USER',
    app: 'APP'
};
const AUTH_API_ENDPOINT = `${API_HOST}oauth/token`;

export const GET_APP_ACCESS_TOKEN_SUCCESS = 'GET_APP_ACCESS_TOKEN_SUCCESS';
export const GET_APP_ACCESS_TOKEN_FAILURE = 'GET_APP_ACCESS_TOKEN_FAILURE';
export const PRELOAD_ACCESS_TOKEN_FROM_LOCAL_STORAGE = 'PRELOAD_ACCESS_TOKEN_FROM_LOCAL_STORAGE';

const fetchAccessToken = (body:any) => {

    return fetch(AUTH_API_ENDPOINT, {
        mode: 'cors',
        method: 'POST',
        headers: {
            'Authorization': `Basic ${base64.encode('reflow:reflow')}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body
    })
};


export const setAccessToken = (type:any, accessToken:any, accessTokenType:any) => {
    try {
        localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY, accessToken);
        localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN_TYPE, accessTokenType);
    }
    catch (err) {
        logException(err, { type, accessToken, accessTokenType });
    }
    return {
        type,
        accessToken
    }
};

export const getAccessTokenType = () => {
    return localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN_TYPE);
};

export const getAccessToken = () => {
    return localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY)
}

export const LOGOUT = 'LOGOUT';

export const logout = () => {
    localStorage.removeItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY);
    localStorage.removeItem(LOCAL_STORAGE_ACCESS_TOKEN_TYPE);
    // clearSavedState();

    return {
        type: LOGOUT
    }
};

const apiError = (type:any, error:any, context:any) => {
    logException(error, context);
    return {
        type,
        error
    }
};
const callOnFetchAccessToken = (body:any, successType:any, failureType:any, accessTokenType:any) => {
    return (dispatch:any) => {
        return fetchAccessToken(body).then(
            response => response.json().then(json => {
                    if (!response.ok) {
                        return dispatch(apiError(failureType, "Fetch Access Token Fail", { body }))
                    }
                    else {
                        return dispatch(setAccessToken(successType, json.access_token, accessTokenType));
                    }
                },
                error => { return dispatch(apiError(failureType, error, { body })) }
            )).catch(error => { return dispatch(apiError(failureType, error, { body })) });
    }
};
export const getAppAccessToken = () => (dispatch:any, getState:any) => {
    dispatch(logout());

    if (getState().api.accessToken === '')
        return dispatch(callOnFetchAccessToken('grant_type=client_credentials',
            GET_APP_ACCESS_TOKEN_SUCCESS,
            GET_APP_ACCESS_TOKEN_FAILURE,
            ACCESS_TOKEN_TYPES.app
        ));
    return {};
};
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

const login = (email:any, password:any) => {
    return callOnFetchAccessToken(
        qs.stringify({
            grant_type: 'password',
            username: email,
            password: password
        }),
        LOGIN_SUCCESS, LOGIN_FAILURE, ACCESS_TOKEN_TYPES.user);
};
export const attemptLogin = (email:any, password:any, redirectLocation:any) => (dispatch:any, getState:any) => {
    return dispatch(login(email, password))
        .then((response:any) => {
            if (!response.error) {
                dispatch(updateLoggedInUserInfo())
                    .then(() => redirectLocation && history.push(redirectLocation));
            }
        })
};


export const UPDATE_ACCESS_TOKEN = "UPDATE_ACCESS_TOKEN"

export const invalidateStateAccessToken = () => (dispatch:any) => {
    dispatch(setAccessToken(UPDATE_ACCESS_TOKEN, getAccessToken() + "a", getAccessTokenType()))
}