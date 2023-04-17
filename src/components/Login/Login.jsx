import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>

            <p className='txt-error'>{error}</p>

            <h2 className='form-title'>Login</h2>

            <form action="">
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' required />
                </div>

                <input className='btn-submit' type="submit" value="Login" />
            </form>

            <p className='toggle-txt'><small>New to Ema-john? <Link to='/sign-up'>Create New Account</Link></small></p>
        </div>
    );
};

export default Login;