import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import Home from '../../../components/Home';
import styles from './ProductList.module.css';
import buttonStyles from '../../../styles/button.module.css';
import layoutStyles from '../../../styles/layout.module.css';

class ProductList extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { isLoading, products } = this.props;
    return (
      <div>
        { isLoading && 'Loading Products' }
        { products && products.map(product => <p>{ product.title }</p>)}
      </div>
    );
  }
}

export default ProductList;
