
export interface State {
    form: Form;
    routing: Routing;
    componentState: ComponentState;
    api: Api;
}
interface User {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    birthDate: number;
}

interface ComponentState { //some permissions probably good for real estate agent client

}