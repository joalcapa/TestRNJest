import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../src/components/Home';
import { Provider } from 'react-redux';
import ConfigureStore from '../src/store/ConfigureStore';

let store = ConfigureStore();
const expect = global.expect;

jest.mock('Button', () => {
    const RealComponent = require.requireActual('Button')
    const React = require('React')
    class Button extends React.Component {
        render () {
            //this.props.getScrollableNode = function () {}
            return React.createElement('Button', this.props, this.props.children)
        }
    }
    Button.propTypes = RealComponent.propTypes
    return Button
})

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