// import React, { useEffect } from 'react';
import * as React from 'react';
import {Button, TextField} from "@material-ui/core";
import { Formik,Form } from 'formik';
// import IPage from '../interfaces/page';
// import logging from '../config/logging';

interface Values {
    firstName: string;
    lastName: string;
    email: string;
}

interface Props {
    onSubmit: (values: Values) => void;
}

export const RegisterFormPage: React.FunctionComponent<Props> = ({onSubmit}) => {

    return (
        <Formik initialValues={{firstName:'', lastName:'', email:''}} onSubmit={values => {
                    onSubmit(values);
        }}
        >
        {({ values, handleChange, handleBlur}) => (
        <Form>
            <div>
            <TextField
                placeholder={"first name"}
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}/>
            </div>
            <div>
            <TextField
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}/>
            </div>
            <div>
            <TextField
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}/>
            </div>
            <Button type={"submit"} variant="contained">Submit</Button>
            <pre>
                {JSON.stringify(values, null , 2)}
            </pre>
        </Form>
    )}</Formik>);

}

