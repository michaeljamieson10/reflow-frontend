import { createSelector } from 'reselect';
import { State } from '../store/reduxStoreState';
export const getLoggedInUser = (state: State) => state.api.loggedInUserId ? state.api.entities.users[state.api.loggedInUserId] : undefined;