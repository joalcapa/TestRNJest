import { teamsReducer } from "../src/duck/reducers";
import { loadTeams, fetchTeams } from "../src/duck/actions";

const expect = global.expect;
jest.setTimeout(30000);

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);


describe("Test Reducers Team", () => {
    test("state undefined", () => {
       expect(teamsReducer(undefined, {})).toBeDefined();
    });

    test("mock store", async ()=> {
        const store = mockStore({});
        return store.dispatch(fetchTeams())
            .then(() => {
                expect(store.getActions()).toMatchSnapshot();
            });
    });

});