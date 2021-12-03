import {FetchTodosAction, DeleteTodoAction} from "./todos";

export enum ActionTypes {
    fetchTodos,
    deleteTodo
}
// export enum AuthenticationTypes {
//     //user reducer types
//     SET_AUTHENTICATED,
//     SET_UNAUTHENTICATED,
//     SET_USER,
//     LOADING_USER,
//     //UI reducer types
//     SET_ERRORS,
//     LOADING_UI,
//     CLEAR_ERRORS
// }
//In types.ts we will define constants for user authentication and UI loading purpose

//user reducer types
export const SET_AUTHENTICATED='SET_AUTHENTICATED';
export const SET_UNAUTHENTICATED='SET_UNAUTHENTICATED';
export const SET_USER='SET_USER';
export const LOADING_USER='LOADING_USER';
//UI reducer types
export const SET_ERRORS='SET_ERRORS';
export const LOADING_UI='LOADING_UI';
export const CLEAR_ERRORS='CLEAR_ERRORS';

export type Action = FetchTodosAction | DeleteTodoAction;