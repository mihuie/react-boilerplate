import React from 'react'; // eslint-disable-line
import { render } from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Promise from 'promise-polyfill';
window.Promise = window.Promise || Promise;

import App from './App';
import store from './store';
// import { loadData } from './dataLoader';

import '../styles/theme.scss';

/**************************************************
* Screens
**************************************************/
import Home from './components/screens/home';

// loadData(store);

/**************************************************
* Routes
**************************************************/
render(
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById('app')
);
