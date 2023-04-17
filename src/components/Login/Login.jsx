import React, { useContext, useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {

    const [error, setError] = useState('');
    const {signIn} = useContext(AuthContext);

    const handleLogin = (event) => {
        
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
        })
        .catch(err => {
            console.log(err);
            setError(err.message);
        })
    }

    return (
        <div className='form-container'>

            <p className='txt-error'>{error}</p>

            <h2 className='form-title'>Login</h2>

            <form onSubmit={handleLogin}>
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