import { teamsReducer } from "../src/duck/reducers";

const expect = global.expect;

describe("Test Reducers Team", () => {
    test("state undefined", () => {
       expect(teamsReducer(undefined, {})).toBeDefined();
    });
/*
    test("test a reducer async", () =>{

    });
*/
});