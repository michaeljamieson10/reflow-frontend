import React from "react";
// import {BrowserRouter, Route, RouteComponentProps, Switch} from "react-router-dom";
import {Route, Routes} from 'react-router-dom';
import routes from "./config/route";
import HomePage from "./pages/home";
import {RegisterFormPage} from "./pages/RegisterFormPage";

const Application: React.FC<{}> = props => {
    return(<div>
        {/*<BrowserRouter>*/}
        {/*<Switch>*/}
        {/*    {routes.map((route, index) => {*/}
        {/*        return (*/}
        {/*            <Route*/}
        {/*                key={index}*/}
        {/*                path={route.path}*/}
        {/*                exact={route.exact}*/}
        {/*                render={(props: RouteComponentProps<any>) => (*/}
        {/*                    <route.component*/}
        {/*                        name={route.name}*/}
        {/*                        {...props}*/}
        {/*                        {...route.props}*/}
        {/*                    />*/}
        {/*                )}*/}
        {/*            />*/}
        {/*        );*/}
        {/*    })}*/}
        {/*</Switch>*/}
        <Routes>
            <Route path=''
                   element={<HomePage name={"lol"}/>}
            />
            <Route path='/register'
                   element={<RegisterFormPage onSubmit={({firstName, lastName, email }) => {
                       console.log(email,firstName,lastName);
                   }} />
                   }
            />
        </Routes>

    {/*</BrowserRouter>*/}
    </div>)
}
export default Application;