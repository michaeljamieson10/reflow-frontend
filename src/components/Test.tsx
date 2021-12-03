import React from "react";
interface LoginProps {
    errorMessage: string;
    handleSubmit: (username: string, password: string) => any;
}

const Test: React.FC<any> = props => {
return( <div>TESTING</div>)
}
export default React.memo(Test);
