import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import './Login.css'

const Login = () => {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message,setMessage] = useState('');

    const getEmail = event => {
        const email = event.target.value;
        setEmail(email);
    }

    const getPassword = event => {
        const password = event.target.value;
        setPassword(password);
    }

    const submitLogin = (event) => {
        event.preventDefault();
        
    }





    return (

        <div className='form-container'>
            <h5 className='text-center mb-4'>Please Login !!</h5><hr />
            
            <form onSubmit={submitLogin} className='form-styling'>
                <input onBlur={getEmail} className='form-control' type="email" name="Your Email" id="" placeholder='Your Email' required />
                <input onBlur={getPassword} className='form-control' type="password" name="Your Password" id="" placeholder='Your Password' required /><br />
                <button className='button-39' type='submit'>Login</button>
            </form>

            <div className="hr-line">
                <hr className='hr' />
                <p className='mx-2'>OR</p>
                <hr className='hr' />
            </div>

            <div className="login-methods">
                <div className="login-container">
                    <p>Continue with <img src="./google.png" alt="" /> Google</p>
                </div>
            </div>

            <p className='text-center mt-2'>Don't Have a Account? <span> <Link to='/register'>Please Register</Link> </span></p>
        </div>

    );
};

export default Login;