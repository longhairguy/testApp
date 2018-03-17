import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {createStore,applyMiddleware,compose,combineReducers} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import modalReducer from './store/reducers/modal';
import authReducer from './store/reducers/auth';
import selectTestReducer from './store/reducers/selectTest';
import questionsReducer from './store/reducers/questions';
import thunk from 'redux-thunk';
import statisticsReducer from './store/reducers/statistics';
const composeEnhancers = process.env.NODE_ENV === 'development'?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose:null;

const rootReducer = combineReducers({
  auth:authReducer,
  modal:modalReducer,
  selectTest:selectTestReducer,
  questions:questionsReducer,
  statistics:statisticsReducer,
})
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
