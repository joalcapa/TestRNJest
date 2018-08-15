import { combineReducers } from "redux";
import * as types from "./types";

export const teamsReducer = ( state = null, action ) => {
    switch( action.type ) {
        case types.LOAD_TEAMS:
            console.log("Load Teams ...");
            return {
                name: 'jose'
            };
        /* ... */
        default: return state;
    }
}

const reducer = combineReducers( {
    teamsReducer: teamsReducer
});

export default reducer;