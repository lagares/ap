import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Checkout from './Checkout.js';

let counter = 0;

class ProductRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        counter: 1 // the product count starts at 1
    }
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    this.setState({
      counter: this.state.counter + 1
    });
    console.log(this.state.counter);
    return this.state.counter;
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

class ProductTable extends React.Component {
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

class ProductCount extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <Link className="button" to="/checkout">Basket</Link>
          <span> {counter}</span>
      </div>
    )
  }
}

class CheckoutButton extends React.Component {
  render() {
      return (
          <Link className="button" to="/checkout">Proceed To Checkout</Link>
      )
  }
}

class ProductListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: counter
    }
  };

render() {
      return (
      <Router>
        <div>
          Counter = {this.state.counter}
          <ProductCount counter={this.state.counter} />
          <ProductTable products={this.props.products} />
          <CheckoutButton />
          <Route path="/checkout" component={Checkout}/>
        </div>
      </Router>
      );
  }
}  

class App extends React.Component {
  render() {
    return (
      <div>
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