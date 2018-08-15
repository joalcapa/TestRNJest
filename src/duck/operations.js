import * as actions from "./actions";

const loadTeams = actions.loadTeams();

// This is a thunk which dispatches multiple actions from actions.js
const loadTeamsAll  = ( distance ) => ( dispatch ) => {
    dispatch( actions.loadTeams( ) ).then( ( ) => {
        //dispatch( actions.swim( distance ) );
        //dispatch( /* any action */ );
    } );
}

export {
    loadTeamsAll
};