import React from 'react'
import { Provider } from 'react-redux';
import Home from "./components/Home";
import ConfigureStore from './store/ConfigureStore';

let store = ConfigureStore();

const App = () => {
    return (
        <Provider store={store}>
            <Home />
        </Provider>
    );
};

export default App;