import React from 'react';
import { Link } from 'react-router-dom';
import './register.css';
const Register = () => {
    return (
        <div className="container my-5 ">
            <div className="register-form mx-auto w-75">
                <h3 className="fw-bold text-center my-3">Register : Create Acount</h3>
                <form onSubmit="" className="form-inputField mb-3">
                    <input className="border-0" type="email" placeholder="First Name" />
                    <br />
                    <input className="border-0" type="email" placeholder="Last Name" />
                    <br />
                    <input className="border-0" type="email" placeholder="Your Email" />
                    <br />
                    <input className="border-0" type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input className="border-0" type="password" name="" id="" placeholder="Re-Enter Password" />
                    <br />
                    <input className="submit d-flex m-auto btn rounded-2 w-auto text-center px-4 py-1 " type="submit" value="Submit" />
                </form>
                <p>Already Have an acount? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;