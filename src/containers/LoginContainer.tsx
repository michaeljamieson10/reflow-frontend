import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import {getLoggedInUser} from "../selectors/userSelectors";
import { attemptLogin } from "../actions/oauth";
import { State, User } from "../store/reduxStoreState";
import { history } from "../index";
import Login from "../components/Login";
// import Login from "../components/Login";

const LoginPage: React.FC<{}> = () => {
    const dispatch = useDispatch();
    const loggedInUser = useSelector<State, User>(getLoggedInUser, shallowEqual);
    const errorMessage = useSelector<State, string>(state => (state.api.errorMessage), shallowEqual);

    useEffect(() => {
        if (loggedInUser) history.push('/');
    });

    const handleSubmit = (username: string, password: string) => {
        dispatch(attemptLogin(username, password, '/'));
    }
//
    return <Login errorMessage={errorMessage} handleSubmit={handleSubmit} />
    // return <div>ll</div>
}
//
export default LoginPage;