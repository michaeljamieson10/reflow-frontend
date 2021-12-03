import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
// import {App} from "./components/App";
import {reducers} from "./reducers";
import { createBrowserHistory } from "history";
import {Route, Router, Switch} from "react-router-dom";
import LoginContainer from "./containers/LoginContainer";
import Test from "./components/Test";
import Application from "./application";
// import { useNavigate } from "react-router-dom";

export const history = createBrowserHistory();
const store = createStore(reducers, applyMiddleware(thunk))
// const App = () => {
    ReactDOM.render(
        <Provider store={store}>
            {/*<App />*/}
            {/*<Router history={history}>*/}
            {/*/!*    <Switch>*!/*/}
            {/*/!*        <Route path="/" render={Test} />*!/*/}
            {/*/!*        <Route path="/login" component={LoginContainer} />*!/*/}
            {/*/!*    </Switch>*!/*/}
            {/*</Router>*/}

            <Application/>
        </Provider>,
        document.querySelector("#root")
    )
// }