import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Checkout from './Checkout.js';
import CheckoutResult from './CheckoutResult';

import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom';
  
ReactDOM.render(  
<Router>
    <div>
        <Route path="/" component={App}/>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/checkoutResult" component={CheckoutResult}/>
    </div>
</Router>
, 
    document.getElementById('root'));
