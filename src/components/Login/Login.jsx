import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {

    const [show, setShow] = useState(false);

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location);

    const from = location.state?.from?.pathname || "/";
    console.log(from);

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
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err);
                setError(err.message);
            })
    }

    return (
        <div className='form-container'>

            <h2 className='form-title'>Login</h2>

            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type={show ? "text" : "password"} name='password' required />
                    <p onClick={() => setShow(!show)} className='show-pass'><small>
                        {
                            show ? 
                            <span>Hide Password</span> :
                            <span>Show Password</span>
                        }
                    </small></p>
                </div>

                <input className='btn-submit' type="submit" value="Login" />
            </form>

            <p className='toggle-txt'><small>New to Ema-john? <Link to='/sign-up'>Create New Account</Link></small></p>
        </div>
    );
};

export default Login;