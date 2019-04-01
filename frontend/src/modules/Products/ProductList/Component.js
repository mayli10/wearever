import React, { Component } from 'react';

import styles from './ProductList.module.css';

class ProductList extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { isLoading, products } = this.props;
    return (
      <div>
        { isLoading && 'Loading Products' }
        { products && products.map(product => <p key={product.sku}>{ product.title }</p>)}
      </div>
    );
  }
}

export default ProductList;
