import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductList from './ProductList';
import Checkout from './Checkout';
import CheckoutResult from './CheckoutResult';

import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom';
  
ReactDOM.render(  
<Router>
    <div>
        <Route exact path="/" component={ProductList}/>
        <Route path="/checkout" component={Checkout} />
        <Route path="/checkoutResult" component={CheckoutResult}/>
    </div>
</Router>
, 
    document.getElementById('root'));
