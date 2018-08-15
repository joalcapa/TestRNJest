import * as actions from "./actions";

/*
const loadTeamsAll  = ( )  => {
    console.log("Go, load teams");
    dispatch(actions.loadTeams());
}
*/
const loadTeamsAll = actions.loadTeams();

export {
    loadTeamsAll
};