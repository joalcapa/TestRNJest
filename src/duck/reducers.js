import { combineReducers } from "redux";
import * as types from "./types";


let teams = [
    {
        name: 'Jose',
        dorsal: 7
    },
    {
        name: 'Alberto',
        dorsal: 17
    }
];

export const teamsReducer = ( state = null, action ) => {
    switch( action.type ) {
        case types.LOAD_TEAMS:
            console.log("Load Teams ...");
            return {
                teams: action.payload
            };

        default: return {
            teams: teams
        };
    }
}

const reducer = combineReducers( {
    teamsReducer: teamsReducer
});

export default reducer;