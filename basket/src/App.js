import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class ProductRow extends Component {
  render() {
    const product = this.props.product;
  
    return (
      <tr>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td><button onClick={() => this.props.onClick()}>Add to Basket</button></td>
          <td> {product.added}</td>
      </tr>
      );
  }
}

class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      added: 0
    };
    this.handleAdd = this.handleAdd.bind(this);
  };

  handleAdd() {
    this.setState({
      added: this.state.added + 1
    });
    return;
  }

  render() {
    const rows = [];
    
    this.props.products.forEach((product) => {
      rows.push(
        <ProductRow
          product={product}
          key={product.name}
          added={this.state.added}
          onClick={() => this.handleAdd() } />
        );
      }
    );

    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

// class ProductCount extends Component {
//   render() {
//     return (
//       <div>
//           <Link className="button" to="/checkout">Basket</Link>
//           <span> ### </span>
//       </div>
//     )
//   }
// }

function ProductCount(props) {
    return (
      <div>
          <Link className="button" to="/checkout">Basket</Link>
          <span> ### </span>
      </div>
    )
  }

function CheckoutButton(props) {
  return (
      <Link className="button" to="/checkout">Proceed To Checkout</Link>
  )
}

class ProductListPage extends Component {
  constructor(props) {
    super(props);
      this.state = {
      total: Array(this.props.products.length).fill(null)
    };
  };

  render() {
      return (
        <div>
          <ProductCount />
          <ProductTable products={this.props.products} />
          <CheckoutButton />
        </div>
      );
  }
}  

function App(props) {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Product Basket</h1>
      <ProductListPage products={PRODUCTS} />
    </div>
  );
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