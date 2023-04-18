//Imports
import { createAction, Action } from '@reduxjs/toolkit';

//Actions
export const toggleTheme = createAction('theme/toggle');

//Reducer
export default function reducer(state = 'light', action: Action) {
    if (toggleTheme.match(action)) {
        return state === 'light' ? 'dark' : 'light';
    }
    return state;
}
