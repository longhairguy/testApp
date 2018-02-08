import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import homeReducer from './store/reducers/home';
const store = createStore(homeReducer);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
