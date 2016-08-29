import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './store/configureStore';
import './reset.css';
import './app.global.css';
import {ipcRenderer} from 'electron';
import {SUCCESS_SAVE} from './actions/host';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);


ipcRenderer.on('save', (event, message) => {
    ipcRenderer.send('hostready', store.getState().host.host);
});

ipcRenderer.on('successsave', (event, message) => {
    store.dispatch({
        type: SUCCESS_SAVE
    })
});

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
