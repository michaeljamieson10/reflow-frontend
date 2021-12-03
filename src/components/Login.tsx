import React, { useEffect, useState } from "react";

interface LoginProps {
    errorMessage: string;
    handleSubmit: (username: string, password: string) => any;
}


const Login: React.FC<LoginProps> = props => {
    const { errorMessage, handleSubmit } = props;

    const [cardAnimaton, setCardAnimation] = useState("card-hidden");
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => setCardAnimation(""), 700);
        return () => clearTimeout(timeout);
    }, []);

    const submitLogin = () => {
        handleSubmit(username, password)
    }

    const handleInputKeyUp = (e: React.KeyboardEvent) => {
        const keyCode = e.keyCode || e.which;
        if (keyCode === 13) submitLogin();
    }

    return (<div></div>
        // <div className="login" style={{ backgroundImage: `url(${login})` }}>
        //     <div className="login-card">
        //         <form>
        //             <Card login className={cardAnimaton}>
        //                 <CardHeader
        //                     className="login-header"
        //                     color="primary"
        //                 >
        //                     <img src='/assets/images/grassp_logistics.png' alt='Grassp Logistics'/>
        //                 </CardHeader>
        //                 <CardBody>
        //                     <CustomInput
        //                         labelText="Email"
        //                         id="email"
        //                         formControlProps={{
        //                             fullWidth: true,
        //                             error: !!(errorMessage)
        //                         }}
        //                         inputProps={{
        //                             endAdornment: (
        //                                 <InputAdornment position="end">
        //                                     <Email />
        //                                 </InputAdornment>
        //                             ),
        //                             type: "email",
        //                             value: username,
        //                             onChange: (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value),
        //                             onKeyUp: (e: React.KeyboardEvent) => handleInputKeyUp(e),
        //                         }}
        //                     />
        //                     <CustomInput
        //                         labelText="Password"
        //                         id="password"
        //                         formControlProps={{
        //                             fullWidth: true,
        //                             error: !!(errorMessage)
        //                         }}
        //                         helperText={errorMessage || ''}
        //                         inputProps={{
        //                             endAdornment: (
        //                                 <InputAdornment position="end">
        //                                     <Icon>lock_outline</Icon>
        //                                 </InputAdornment>
        //                             ),
        //                             type: "password",
        //                             autoComplete: "off",
        //                             value: password,
        //                             onChange: (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
        //                             onKeyUp: (e: React.KeyboardEvent) => handleInputKeyUp(e),
        //                         }}
        //                     />
        //                 </CardBody>
        //                 <CardFooter className="login-footer">
        //                     <Button color="rose" size="lg" block onClick={() => submitLogin()}>
        //                         Log In
        //                     </Button>
        //                 </CardFooter>
        //             </Card>
        //         </form>
        //     </div>
        // </div>
    );
}

export default React.memo(Login);