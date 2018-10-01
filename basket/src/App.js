import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Checkout from './Checkout.js';

let total = 0;

class ProductRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
        total: 1 // the product count starts at 1
    }
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    this.setState({
      total: this.state.total + 1 // this is number of clicks per product - *but* resets with each new product
    });
    total++; // this is total number of clicks = grand total
    console.log(this.state.total);
    console.log(total);
    return this.state.total;
  };

  render() {
    const product = this.props.product;

    return (
      <tr>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td><button onClick={this.handleClick}>Add to Basket</button></td>
      </tr>
      );
  }
}

class ProductTable extends Component {
  render() {
    const rows = [];
    
    this.props.products.forEach((product) => {
      rows.push(
      <ProductRow
          product={product}
          key={product.name} />
      );
    });

    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class ProductCount extends Component {
  render() {
    return (
      <div>
          <Link className="button" to="/checkout">Basket</Link>
          <span> {total}</span>
      </div>
    )
  }
}

class CheckoutButton extends Component {
  render() {
      return (
          <Link className="button" to="/checkout">Proceed To Checkout</Link>
      )
  }
}

class ProductListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: total
    }
  };

render() {
      return (
      <Router>
        <div>
          total = {this.state.total}
          <ProductCount total={this.state.total} />
          <ProductTable products={this.props.products} />
          <CheckoutButton />
          <Route path="/checkout" component={Checkout}/>
        </div>
      </Router>
      );
  }
}  

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Product Basket</h1>
        <ProductListPage products={PRODUCTS} />
      </div>
    );
  }
}

const PRODUCTS = [
  {
    "sku": 1,
    "name": "Product One",
    "description": "Product One description",
    "price": 1.11
  },
  {
    "sku": 2,
    "name": "Product Two",
    "description": "Product Two description",
    "price": 2.22
  },
  {
    "sku": 3,
    "name": "Product Three",
    "description": "Product Three description",
    "price": 3.33
  },
  {
    "sku": 4,
    "name": "Product Four",
    "description": "Product Four description",
    "price": 4.44
  },
  {
    "sku": 5,
    "name": "Product Five",
    "description": "Product Five description",
    "price": 5.55
  }
]

export default App;