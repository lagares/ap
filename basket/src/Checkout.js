import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

let counter = 0;

class CheckoutProductRow extends React.Component {
  handleClick() {
    counter = counter - this.state.quantity;

    return counter;
  }

  render() {
    const product = this.props.product;

    return (
      <tr>
          <td>{product.name}</td>
          <td><input type="text" value={this.state.quantity} onChange={this.handleChange}/></td>  
          <td>{product.price * this.state.quantity}</td>
          <td><button onClick={this.handleClick}>Remove</button></td>
      </tr>
      );
  }
}

class CheckoutProductTable extends React.Component {
  render() {
    const rows = [];
    
    this.props.products.forEach((product) => {
      rows.push(
      <CheckoutProductRow
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
  render() {
      console.log(counter);
      return (
        <Router>
          <div>
              <Link className="button" to="/checkout">Basket</Link>
              <span>{counter}</span>
          </div>
        </Router>
      )
  }
}

class CheckoutButton extends React.Component {
  render() {
      return (
        <Router>
          <Link className="button" to="/checkout">Checkout</Link>
        </Router>
      )
  }
}

class CheckoutListPage extends React.Component {
  render() {
      return (
      <div>
          <ProductCount />
          <CheckoutProductTable products={this.props.products} />
          <CheckoutButton />
      </div>
      );
  }
}  

class Checkout extends React.Component {
  render() {
    return (
      <div>
        <CheckoutListPage products={PRODUCTS} />
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


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default Checkout;