import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withFirebase } from '../../../components/Firebase'
import styles from './ProductList.module.css';
import emptyheart from '../../../images/icons/empty-heart.png';
import coloredheart from '../../../images/icons/colored-heart.png';
import firebase from '../../../components/Firebase/firebase';
import Product from '../../../components/ProductPage';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloading: false,
      productList: [],
    };
  }
  componentDidMount() {
    let ref = firebase.database().ref("/Product")
    this.setState({ isloading: true });

    ref.on('value', snapshot => {
      const productsObject = snapshot.val();

      const list = Object.keys(productsObject).map(key => ({
        ...productsObject[key],
        uid: key,
      }));

      this.setState({
        productList: list,
        isloading: false,
      });
    });
  }

  render() {
    const { isloading, productList } = this.state;
    return (
      <div className={styles.container}>
        { isloading && 'Loading Products' }
        { productList && productList.map(product =>
          <div key={ product.sku } className={styles['child-container']}>
            <div className={styles['img-container']}>
              <img className={styles.img}
              src={ (product.defaultImages).split("'")[1] }
              onMouseOver={e => (e.currentTarget.src = (product.defaultImages).split("'")[3])}
              onMouseOut={e => (e.currentTarget.src = (product.defaultImages).split("'")[1])}/>
              <img className={styles['heart']}
              src={emptyheart}
              onMouseOver={e => (e.currentTarget.src = coloredheart)}
              onMouseOut={e => (e.currentTarget.src = emptyheart)}/>
            </div>

            <Link to={`/Product/${product.sku}`} style={{ textDecoration: 'none' }}>
              <div className={styles.infoSection}>
                <div>{product.key}</div>
                <div className={styles.designer}>{ product.designer.toUpperCase() }</div>
                <div className={styles.title}>{ product.title }</div>
                <span className={styles.msrp}>${ product.mrsp } retail</span>
                <span className={styles.prices}> | starting from ${ product.threeDays }</span>
              </div>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default ProductList;
