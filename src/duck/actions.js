import * as types from "./types";
import axios from 'axios';

const loadTeams = (teams) => ( {
    type: types.LOAD_TEAMS,
    payload: teams
});

const fetchTeams = () => {
    return dispatch => {
        return axios
            .get(`http://swapi.co/api/people`)
            .then(res => {
                dispatch(loadTeams(res.data.results));
            })
            .catch(err => {});
    };
};

export {
    loadTeams,
    fetchTeams
};