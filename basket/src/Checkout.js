import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

let counter = 0, total = 0, success = true;

class CheckoutProductRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: counter,
            total: total
        }
    }
  handleRemove() {
    // this should remove the product listing and decrement the basket total by the correct amount
    counter = this.state.counter - this.state.total;

    return counter;
  }

  handleChange() {
    // this keeps track of changes to each product's quantity
  }

  render() {
    const product = this.props.product;

    return (
      <tr>
          <td>{product.name}</td>
          <td><input type="text" value={this.state.total} onChange={this.handleChange}/></td>  
          <td>{product.price * this.state.total}</td>
          <td><button onClick={this.handleRemove}>Remove</button></td>
      </tr>
      );
  }
}

class CheckoutProductTable extends Component {
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
      <div>
        <Link className="button" to="/">Continue Shopping</Link>
        <Link className="button" to="/checkoutResult">Basket</Link> <span>###</span>
        <table>
          <tbody>{rows}</tbody>
        </table>
        <Link className="button" to="/checkoutResult" success={this.props.success}>Checkout</Link>
        {/* <CheckoutButton success={this.props.success} /> */}  
      </div>
    );
  }
}

// class CheckoutCount extends Component {
//   render() {
//       console.log(counter);
//       return (
//           <div>
//           </div>
//       )
//   }
// }

// class ContinueShoppingButton extends Component {
//     render() {
//         return (
//         )
//     }    
//   }

// class CheckoutButton extends Component {
//   render() {
//       return (
//       )
//   }
// }

class Checkout extends Component {
  render() {
      return (
        <div>
            <CheckoutProductTable products={PRODUCTS} />
        </div>
      );
  }
}  

// class Checkout extends Component {
//   render() {
//     return (
//       <div>
//         <CheckoutListPage products={PRODUCTS} />
//       </div>
//     );
//   }
// }

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

export default Checkout;