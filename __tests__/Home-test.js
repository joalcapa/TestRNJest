import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../src/components/Home';
import { Provider } from 'react-redux';
import ConfigureStore from '../src/store/ConfigureStore';

let store = ConfigureStore();
const expect = global.expect;

describe("Component", () => {
    test('renders component Home', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <Home />
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
/*
    test("functions of the Home component", () => {
        let appComp = renderer.create(
            <Provider store={store}>
                <Home />
            </Provider>
        ).getInstance();
        appComp.change(7);
        //console.log("appComponent: ", appComp);
        expect(appComp.state.data).toEqual(70);
    });
*/
});