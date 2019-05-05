import 'date-fns';
import React, { Component } from 'react';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize'; // necessary for latest version 
import 'react-dates/lib/css/_datepicker.css';
// import moment from 'moment';
import classNames from 'classnames';
import styles from './Checkout.module.css';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';



class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate:null,
            endDate:null,
            focusedInput: null
        };
      }
    
      handleDateChange = date => {
        this.setState({ selectedDate: date });
    };
    
    render() {
        return(
        <div className={styles["outer-container"]}>
            <h1>Checkout</h1>
            <div className={styles["outer-container"]}>
            <div className={styles["section-title"]}>1. Choose your Wearever box Pick Up & Return Date</div>
                <div className={styles["section-title"]}>
                    <DateRangePicker 
                    startDateId="startDate"
                    endDateId="endDate"
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
                />
                </div>
            </div>
            <div className={styles["outer-container"]}>
            2. Choose a pickup / drop off time. 
            <div className={styles["outer-container"]}>
                Pickup Time: 
                <TextField
          name='title'
          margin='normal'
          variant="outlined"
        />
        </div>
        <div className={styles["outer-container"]}>
                Drop off Time: 
                <TextField
          name='title'
          margin='normal'
          variant="outlined"
        />
        </div>
            </div>
            <form>
                <label>3. Leave us any Questions or Comments! 
                <TextField
          name='title'
          margin='normal'
          variant="outlined"
          fullWidth
        />
                </label>
                <div className={styles["outer-container"]}>
                    <div className={styles["submit-button"]}>Schedule my box</div>
                </div>
                
            </form>
            
        </div>
        );
    }
}

export default Checkout;