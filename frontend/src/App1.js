import React, { Component } from 'react';
import './Shop.css';
import ProductCard from './ProductCard.js';
import PrimarySearchAppBar from './PrimarySearchAppBar.js';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    paddingRight: '20px',
    marginLeft: '20px',
  },
  productCount: {
    fontSize: "25px",
    fontFamily: 'Staatliches',
    color: 'gray',
    paddingLeft: '35px'
  }
})

class Shop extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      displayedProducts: [],
      shoppingCart: [],
    };
  }

  componentDidMount() {
    import('./products.json')
    .then(json => {
      this.setState({displayedProducts: json.products});
    })
  }
  addToCart = (id) => {
    const cartItems = this.state.shoppingCart;
    for (let p of this.state.displayedProducts) {
      if (p.id === id) cartItems.push(p);
    }
    this.setState({shoppingCart: cartItems});
  }

  getProducts = () => {
    const productComponents = [];
    for (let p of this.state.displayedProducts) {
      productComponents.push(<ProductCard key={p.id} info={p} cartOnClick={this.addToCart} />);
    }
    return productComponents;
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <PrimarySearchAppBar cartItems={this.state.shoppingCart}/>
        <p className={classes.productCount}>{this.state.displayedProducts.length} products</p>
        <Grid container spacing={24} className={classes.container}>
          {this.getProducts()}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Shop);
