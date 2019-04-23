import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from './ProductList.module.css';
import emptyheart from '../../../images/icons/empty-heart.png';
import coloredheart from '../../../images/icons/colored-heart.png';

class ProductList extends Component {
  componentDidMount() {
    console.log(this.props)
    this.props.getProducts();
  }

  render() {
    const { isLoading, products } = this.props;
    return (
      <div className={styles.container}>
        { isLoading && 'Loading Products' }
        { products && products.map(product =>
          <div key={ product.sku }>
            <div className={styles['img-container']}>
              <img className={styles.img}
              src={ product.defaultImages[0] }
              onMouseOver={e => (e.currentTarget.src = product.defaultImages[1])}
              onMouseOut={e => (e.currentTarget.src = product.defaultImages[0])}/>
              <img className={styles['heart']}
              src="http://localhost:3001/get_image/icons/empty-heart.png"
              onMouseOver={e => (e.currentTarget.src = "http://localhost:3001/get_image/icons/colored-heart.png")}
              onMouseOut={e => (e.currentTarget.src = "http://localhost:3001/get_image/icons/empty-heart.png")}/>
            </div>
            {/* <div className={styles['info-section']}>
              <div className={styles.designer}>{ product.designer.toUpperCase() }</div>
              <div className={styles.title}>{ product.title }</div>
              <span className={styles.msrp}>${ product.msrp / 100 } retail</span>
              <span className={styles.prices}> | starting from ${ product.prices["3"] / 100 }</span>
            </div> */}
            <Link to={`/Product/${product.sku}`} style={{ textDecoration: 'none' }}>
              <div className={styles.infoSection}>
                <div className={styles.designer}>{ product.designer.toUpperCase() }</div>
                <div className={styles.title}>{ product.title }</div>
                <span className={styles.msrp}>${ product.msrp / 100 } retail</span>
                <span className={styles.prices}> | starting from ${ product.prices["3"] / 100 }</span>
              </div>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

// <img className={styles['heart']}
// src={emptyheart}
// onMouseOver={e => (e.currentTarget.src = {coloredheart})}
// onMouseOut={e => (e.currentTarget.src = {emptyheart})}/>

export default ProductList;
