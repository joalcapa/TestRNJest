import React from 'react'
import { Provider } from 'react-redux';
import Home from "./components/Home";
import ConfigureStore from './store/ConfigureStore';

let store = ConfigureStore();

const App = () => {
    _render = () => {
        return (
            <Provider store={store}>
                <Home />
            </Provider>
        );
    }

    return {
        render : _render
    }
};

export default App;