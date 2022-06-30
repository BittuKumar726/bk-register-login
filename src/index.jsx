import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './helpers';
import { App } from './App';
import ResponsiveAppBar from './components/nav-bar';

// setup backend
import { configureBackend } from './helpers';
configureBackend();

render(
    <Provider store={store}>
        {/* <ResponsiveAppBar /> */}
        <App />
    </Provider>,
    document.getElementById('app')
);