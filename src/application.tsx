import React from "react";
import {BrowserRouter, Route, RouteComponentProps, Switch} from "react-router-dom";
import routes from "./config/route";

const Application: React.FC<{}> = props => {
    return(<div>
        <BrowserRouter>
        <Switch>
            {routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        render={(props: RouteComponentProps<any>) => (
                            <route.component
                                name={route.name}
                                {...props}
                                {...route.props}
                            />
                        )}
                    />
                );
            })}
        </Switch>
    </BrowserRouter>
    </div>)
}
export default Application;