import React, { Component } from 'react';
import './App.css';
import ProductCard from './ProductCard.js';
import PrimarySearchAppBar from './PrimarySearchAppBar.js';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
  },
  container: {
    paddingTop: '20px',
    display: 'flex',
    justifyContent: 'space-evenly',
  }

})

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      displayedProducts: []
    };
  }

  componentDidMount() {
    import('./products.json')
    .then(json => {
      this.setState({displayedProducts: json.products});
    })
  }

  getProducts = () => {
    const productComponents = []
    for (let p of this.state.displayedProducts) {
      productComponents.push(<ProductCard info={p} />);
    }
    return productComponents;
  }

  render() {
    const { classes } = this.props;
    console.log(this.state.products);

    return (
      <div className={classes.root}>
        <PrimarySearchAppBar/>
        <div className={classes.container}>
          {this.getProducts()}
        </div>
      </div>
    );
  }
}

// <ProductCard productName="product1" />
// <ProductCard productName="product2" />


// new ProductCard("product1")
//
// ProductCard::ProductCard(productname) {
//   string this.productname = productname;
// }
//
class ProductCounter extends Component {
  render() {
    let productCount = 1;
    return (
      <text>{productCount} Product(s) found.</text>
    );
  }
}

class FilterBar extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });

    }
  }
  render() {
    return (
      <div>
      Filter
        <button onClick={this.showMenu}>
          Show menu
        </button>

        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <button> Menu item 1 </button>
                <button> Menu item 2 </button>
                <button> Menu item 3 </button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default withStyles(styles)(App);
