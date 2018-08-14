import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

const expect = global.expect;

describe("Component", () => {
    test('renders component App', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("functions of the App component", () => {
        let appComp = renderer.create(<App />).getInstance();
        appComp.change(7);
        //console.log("appComponent: ", appComp);
        expect(appComp.state.data).toEqual(70);
    });
});