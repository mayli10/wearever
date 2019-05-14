import 'date-fns';
import React, { Component } from 'react';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize'; // necessary for latest version 
import 'react-dates/lib/css/_datepicker.css';
// import moment from 'moment';
import classNames from 'classnames';
import styles from './Checkout.module.css';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import brown from '@material-ui/core/colors/brown';
import btn from '../../../../frontend/src/styles/button.module.css';
import form from '../../../../frontend/src/styles/form.module.css';


class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate:null,
            endDate:null,
            focusedInput: null,
            pickup:''
        };
      }


      handleDateChange = date => {
        this.setState({ selectedDate: date });
    };
    
    render() {
        return(
            <div className={styles["outer-container"]}>
                <div className={styles.header}>
                    You're almost there! 
                </div>
                <div className={styles.content}>
                <div className={styles.subtitle}>1. Choose your Pick up and Return date!  </div>
                    <div className={styles["calendar-container"]}>
                    <DateRangePicker
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    startDateId="start_date_id" // PropTypes.string.isRequired,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId="end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    />
                </div>
                <div>
                    <div className={styles.subtitle}>2. Enter your information for pick up. </div>
                    <form className={form["form-style"]}>
                    <div>
                        <label for="username">Name:</label>
                        <input type="text" name="username"/>
                    </div>
                    <div>
                        <label for="email">Email:</label>
                        <input type="email" name="Email"/>
                    </div>
                    <div>
                        <label for="telNo">Phone number:</label>
                        <input type="text" name="phone" placeholder="ex) XXX-XXX-XXXX"/>
                    </div>

                    </form>
                </div>
                <div>
                    <div className={styles.subtitle}>3. Select Pickup/ Drop off location </div>
                    <form className={form["form-style"]}>
                    <div>
                        <label for="username">Name:</label>
                        <input type="text" name="username"/>
                    </div>
                    <div>
                        <label for="email">Email:</label>
                        <input type="email" name="Email"/>
                    </div>
                    <div>
                        <label for="telNo">Phone number:</label>
                        <input type="text" name="phone" placeholder="ex) XXX-XXX-XXXX"/>
                    </div>

                    </form>
                </div>
            </div>
        </div>
        // <div className={styles["outer-container"]}>
        //     <h1>Checkout</h1>
        //     <div className={styles["outer-container"]}>
        //     <div className={styles["section-title"]}>1. Choose your Wearever box Pick Up & Return Date</div>
        //         <div className={styles["section-title"]}>
        //             <DateRangePicker 
        //             startDateId="startDate"
        //             endDateId="endDate"
        //             startDate={this.state.startDate}
        //             endDate={this.state.endDate}
        //             onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
        //             focusedInput={this.state.focusedInput}
        //             onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
        //         />
        //         </div>
        //     </div>
        //     <div className={styles["outer-container"]}>
        //     2. Choose a pickup / drop off time. 
        //     <div className={styles["outer-container"]}>
        //         Pickup Time: 
        //         <TextField
        //   name='title'
        //   margin='normal'
        //   variant="outlined"
        // />
        // </div>
        // <div className={styles["outer-container"]}>
        //         Drop off Time: 
        //         <TextField
        //   name='title'
        //   margin='normal'
        //   variant="outlined"
        // />
        // </div>
        //     </div>
        //     <form className={form["form-style"]}>
        //         <label>3. Enter the address you would want to receive your Wearever box! 
        //             <div className={styles["inner-container"]}>
        //                 <button className={classNames(btn.btn, btn['styled-btn'])}> Hotel </button>
        //                 <button className={btn["styled-btn"]}> Airport </button>
        //             </div>
                
        //         <input className={form["form-style"]}/>
        //         </label>
        //         <div className={styles["outer-container"]}>
        //         <button className={btn["styled-btn"]}> Submit </button>
        //         </div>
                
        //     </form>
            
        // </div>
        );
    }
}

export default Checkout;