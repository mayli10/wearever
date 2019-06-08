import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteItem } from './actions.js';

class CartItem extends Component {
    delete = id => {
        const { deleteItem } = this.props;
        deleteItem(id);
    }
    
    render() {
        const {item} = this.props;
        return (
            <React.Fragment>
                <div className="img-wrapper">
                    <img className="img-fluid" src={item.picture} alt={item.title} />
                </div>
                <h4 className="title">{item.title}</h4>
                <div className="pricebox"> 3 Day rental: ${item.threeDays}</div>
                <button
                type="button"
                className="close"
                onClick={this.onClick.bind(this, item.id)}
                >
                    &#xd7;
                </button>
            </React.Fragment>
        );
    }
}

export default connect(
    null,
    { deleteItem }
  )(CartItem);