import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Shop from './pages/Shop';
import Product from './pages/Product';
import { store } from './store'
import './index.css'



ReactDOM.render(
    <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={Shop} />
            <Route path="/product/:id" component={Product} />
          </Switch>
      </Router>
    </Provider>, 
    document.getElementById('root'));

