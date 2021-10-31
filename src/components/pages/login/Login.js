import React from 'react';
import './login.css';
import loginImg from './login_yellow.png';

import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const { setUser, signInWithGoogle, setIsLoading } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const url = location.state?.from || "/home";

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result);
                setUser(result.user)
                history.push(url)
            })
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false));
    }
    return (
        <div className="container mt-5 mb-5">
            <div className="row justify-content-center align-items-center login-form">
                <div className="form-left col-md-5 col-12">
                    <h5 className="text-center fw-bold">Login first for booking any packages</h5>
                    <form className="my-2 form-inputField">
                        <input className="border-0" type="email" placeholder="Your email" /> <br />
                        <input className="border-0" type="password" placeholder="Your Password" />
                        <br />
                        <input className="login d-flex m-auto btn rounded-2 w-auto text-center px-4 py-1" type="submit" value="Login" />
                    </form>
                    <p>New to TourMania Website? <Link to="/register">Create Acount</Link></p>
                    <p className="text-center">----------or---------</p>
                    <button onClick={handleGoogleLogin} className="btn-dark text-warning px-3 py-1 border-0 rounded-2 d-flex mx-auto">Google Sign In</button>

                </div>
                <div className="form-right col-md-7 col-12">
                    <img className="img-fluid login-img" src={loginImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;