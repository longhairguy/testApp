import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import homeReducer from './store/reducers/home';
import thunk from 'redux-thunk';
const composeEnhancers = process.env.NODE_ENV === 'development'?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose:null;

const store = createStore(homeReducer,composeEnhancers(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
