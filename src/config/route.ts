import IRoute from '../interfaces/route';
import HomePage from '../pages/home';
import LoginContainer from "../containers/LoginContainer";
import RegisterPage from "../pages/RegisterPage";
import {RegisterFormPage} from "../pages/RegisterFormPage";

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home Page',
        component: HomePage,
        exact: true
    },
    {
        path: '/login',
        name: 'Login Page',
        component: LoginContainer,
        exact: true
    },
    {
        path: '/register',
        name: 'Register Page',
        component: RegisterFormPage,
        exact: true
    },
]

export default routes;