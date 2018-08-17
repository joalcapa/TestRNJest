/*
 * Mocks for GUI RN 0.55.0
 */
module.exports = (jest) => {

    const _mocksComponents = require('../Configuration/ConfigMocks.json');
    const _jest = jest;

    let _init = () => {
        _mocksComponents.ComponentsRN.map((component) => {
            _jest.mock(component, () => {
                const RealComponent = require.requireActual(component);
                const React = require('React');
                class ComponentMock extends React.Component {
                    render () {
                        return React.createElement(component, this.props, this.props.children)
                    }
                };
                ComponentMock.propTypes = RealComponent.propTypes;
                return ComponentMock;
            });
        });
    }

    return {
        init: _init
    }
};