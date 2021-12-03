import { schema, normalize } from 'normalizr';

export const API_HOST = process.env.REACT_APP_API_URL;

export const API_ROOT = API_HOST + 'v1/';

export const CALL_API = Symbol('Call API');

const userSchema = new schema.Entity('users', {}, {
    idAttribute: user => user.id
});

export const Schemas = {
    USER: userSchema,
    USER_ARRAY: [userSchema],
    EMPTY: []
};
