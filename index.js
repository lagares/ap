class ProductRow extends React.Component {
    handleClick() {
        return // increment qtyAdded on a per sku basis
    }

    render() {
      const product = this.props.product;
  
      return (
        <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td><button onClick={handleClick()}>Add to Basket</button></td>
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
        lastCategory = product.category;
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
        let totalAdded = 0; // start with 0 and increment as the user clicks 'add' buttons
        return (
            <div>
                <Link className="button" to="#">Basket</Link>
                <span>{totalAdded}</span>
            </div>
        )
    }
}

class CheckoutButton extends React.Component {
    render() {
        return (
            <Link className="button" to="#">Proceed To Checkout</Link>
        )
    }
}

class ProductListPage extends React.Component {
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
  
const products = [
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
  