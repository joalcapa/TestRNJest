import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../src/components/Home';

const expect = global.expect;

describe("Component", () => {
    test('renders component Home', () => {
        const tree = renderer.create(<Home />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("functions of the Home component", () => {
        let appComp = renderer.create(<Home />).getInstance();
        appComp.change(7);
        //console.log("appComponent: ", appComp);
        expect(appComp.state.data).toEqual(70);
    });
});