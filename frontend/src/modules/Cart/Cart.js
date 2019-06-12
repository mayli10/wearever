import React, { Component } from 'react';
import CartItem from './CartItem';
import styles from './cart.module.css';
import firebase from '../../components/Firebase/firebase';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import buttonStyles from '../../styles/button.module.css';
import classNames from 'classnames';


class Cart extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          isloading: true,
          productList: [],
          listExists: false,
          total:0,
        };
    }

    componentDidMount() {
        let ref = firebase.database().ref("/Cart")
        this.setState({ isloading: true });
    
        ref.on('value', snapshot => {
          const productsObject = snapshot.val();
          if (productsObject === undefined || productsObject === null) {
            this.setState({
              isloading: false
            })
          } else {
            const list = Object.keys(productsObject).map(key => ({
              ...productsObject[key],
              uid: key,
            }));
      
            this.setState({
              listExists: true,
              productList: list,
              isloading: false,
            });
          }
        });
      }

    render() {
        const { isloading, productList } = this.state;
        var cost = (productList.map(product => product.meta.threeDays)).reduce((a, b) => a + b, 0)
        return (
          <div className={styles['outer-container']}>
             <div className={styles.header}>My Wearever Box</div>
            { isloading && <div className={styles.cart}>Loading</div> }
            { ~this.state.listExists && <div className={styles.cart}>There's nothing in the cart. Start browsing! </div>}
            { productList && productList.map(product =>
              <div class={styles.cart}>
                  <CartItem item = {product.meta}></CartItem>
              </div>
            )}
            <div className={styles.title}>
              Total: <span className={styles.designer}> ${cost} </span> (Three day rental)
            </div>
            <div className={styles.bottom}>
                <Link to='/checkout'className={classNames(buttonStyles.btn, buttonStyles['styled-btn'])}> Check Out All</Link>
            </div>
          </div>
        );
      }
}

export default Cart;
  