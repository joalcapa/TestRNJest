var fs = require("fs");

const mocks = '{\n    "ComponentsRN" : [\n        "Button"\n    ]\n}';

const GUIMocks = "module.exports = (jest) => {\n\n    const _mocksComponents = require('../Configuration/ConfigMocks.json');\n    const _jest = jest;\n\n    let _init = () => {\n        _mocksComponents.ComponentsRN.map((component) => {\n            _jest.mock(component, () => {\n                const RealComponent = require.requireActual(component);\n                const React = require('React');\n                class ComponentMock extends React.Component {\n                    render () {\n                        return React.createElement(component, this.props, this.props.children);\n                    }\n                };\n                ComponentMock.propTypes = RealComponent.propTypes;\n                return ComponentMock;\n            });\n        });\n    }\n\n    return {\n        init: _init\n    }\n};";

if (!fs.existsSync('./__tests__/')){
    fs.mkdirSync('./__tests__/');
    fs.mkdirSync('./__tests__/Configuration/');
    fs.mkdirSync('./__tests__/Mocks/');
} else {
    if (!fs.existsSync('./__tests__/Configuration/'))
        fs.mkdirSync('./__tests__/Configuration/');
    if (!fs.existsSync('./__tests__/Mocks/'))
        fs.mkdirSync('./__tests__/Mocks/');
}


fs.writeFile('__tests__/Configuration/ConfigMocks.json', mocks, (err) => {
    if (err) throw err;
    console.log('Configurations Mocks created!');
});

fs.writeFile('__tests__/Mocks/GUIMocks.js', GUIMocks, (err) => {
    if (err) throw err;
    console.log('Mocks GUI created!!');
});
