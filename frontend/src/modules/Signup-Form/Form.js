import React from 'react';
import { Field, reduxForm } from 'redux-form';

const SignupForm = props => {
    const { handleSubmit, pristine, submitting } = props;
    console.log(props);
    return(
        <form onSubmit = { handleSubmit }>
            <div>
                <label>Name</label>
                <div>
                <Field
                    name="name"
                    component="input"
                    type="text"
                    placeholder="Name"
                />
                </div>
            </div>
            <div>
            <label>Email</label>
                <div>
                    <Field
                        name="email"
                        component="input"
                        type="email"
                        placeholder="Email"
                    />
                </div>
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>Submit</button>
            </div>
        </form>
    )
    
}

export default reduxForm({
    form: 'signup'
})(SignupForm)