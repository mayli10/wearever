import React, { Component } from 'react';
import './App.css';
import products from './products.json';
import PrimarySearchAppBar from './PrimarySearchAppBar.js'
import Card from '@material-ui/core/Card';

class App extends Component {
  render() {
    console.log(products)
    return (
      <div>
        <PrimarySearchAppBar></PrimarySearchAppBar>
      </div>
    );
  }
}

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

export default App;
//
