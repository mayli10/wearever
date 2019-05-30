import 'date-fns';
import React, { Component } from 'react';
import { DateRangePicker } from 'react-dates';
import { Link } from 'react-router-dom';
import 'react-dates/initialize'; // necessary for latest version 
import 'react-dates/lib/css/_datepicker.css';
import classNames from 'classnames';
import styles from './Checkout.module.css';
import buttonStyles from '../../../../frontend/src/styles/button.module.css';
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
                    {/* <input type="submit" className={classNames(buttonStyles.btn, buttonStyles['styled-btn'], styles['submit-button'])}></input> */}
                    </form>
                    <Link to="./waitlist" className={classNames(buttonStyles.btn, buttonStyles['styled-btn'])}>Submit</Link>
                </div>
            </div>
        </div>

        );
    }
}

export default Checkout;