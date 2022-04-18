
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../Utilities/firebase.init';
import Footer from '../../SharedComponent/Footer/Footer';

const Register = () => {


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();
        //create user using email password//
        createUserWithEmailAndPassword(email, password);
    }
    // get user register info form from input//
    const getUserName = event => {
        const userName = event.target.value;
        setUserName(userName);
    }
    const getEmail = event => {
        const email = event.target.value;
        setEmail(email);
    }

    const getPassword = event => {
        const password = event.target.value;
        setPassword(password);
    }


    return (
        <div>
            <div className='form-container mb-5'>
                <h5 className='text-center mb-4'>Please Register !!</h5><hr />

                <form onSubmit={handleRegister} className='form-styling'>
                    <input onBlur={getUserName} className='form-control' type="text" name="Your Name" id="" placeholder='Your Name' required />

                    <input onBlur={getEmail} className='form-control' type="email" name="Your Email" id="" placeholder='Your Email' required />

                    <input onBlur={getPassword} className='form-control' type="password" name="Your Password" id="" placeholder='Your Password' required /><br />

                    <button className='button-39' type='submit'>Register</button>
                </form>

                <p className='mt-2 text-center'>Already Have an Account? <span className=''><Link to='/login'>Please Login</Link></span></p>

            </div>
            <Footer/>
        </div>
    );
};

export default Register;