import React from 'react';
import Users from '../src/users';

const expect = global.expect;

describe("Api test", () => {
    test("test of the api", async ()=> {
        global.fetch = jest.fn().mockImplementation(() => {
            var p = new Promise((resolve, reject) => {
                resolve({
                    json: () => {
                        return {Id:1}
                    }
                })
            });
            return p;
        });

        const response = await Users.all();
        expect(response.Id).toBe(1);
    });
});