import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.scss';
import {ThemeProvider} from "./provider/ThemeProvider";
import {Provider} from "react-redux";
import {store} from "./store/store"

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);