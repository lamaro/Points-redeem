import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Shop from './pages/Shop';
import { store } from './store'
import './index.css'



ReactDOM.render(
    <Provider store={store}>
        <Shop />
    </Provider>, 
    document.getElementById('root'));

