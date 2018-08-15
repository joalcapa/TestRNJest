import { combineReducers } from "redux";
import * as types from "./types";

const teamsReducer = ( state = false, action ) => {
    switch( action.type ) {
        case types.LOAD_TEAMS: return true;
        /* ... */
        default: return state;
    }
}

const reducer = combineReducers( {
    teams: teamsReducer
} );

export default reducer;