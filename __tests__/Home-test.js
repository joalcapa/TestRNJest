import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../src/components/Home';
import { Provider } from 'react-redux';
import ConfigureStore from '../src/store/ConfigureStore';

let mocksGUI = require('./Mocks/GUIMocks')(jest);
mocksGUI.init();

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
});