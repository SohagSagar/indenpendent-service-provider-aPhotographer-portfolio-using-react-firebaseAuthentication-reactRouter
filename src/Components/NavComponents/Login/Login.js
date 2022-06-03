import React, { useEffect, useRef, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdatePassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../Utilities/firebase.init';
import Footer from '../../SharedComponent/Footer/Footer';
import Loading from '../../SharedComponent/Loading/Loading';
import './Login.css'


const Login = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    //sign in with email and password//
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // sign in with google sign in method//
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    // user login status //
    useEffect(() => {
        if (user || googleUser) {
            navigate(from, { replace: true });
            toast.success("Login Successful !!", {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }, [googleUser, user]);

    // user login errors // 

    useEffect(() => {
        if (googleError || error) {
            switch (googleError?.code || error?.code) {

                case 'auth/email-already-exists':
                    toast.error("Email is Already Registered !!", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    break;

                case 'auth/user-not-found':
                    toast.error("User not found !!", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    break;

                case 'auth/invalid-email':
                    toast.error("Invalid Email.Please Check Again !!", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    break;

                case 'auth/wrong-password':
                    toast.error("Wrong password. !!", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    break;

                case 'auth/popup-closed-by-user':
                    toast.error("Access denied By User !!", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    break;

                default:
                    toast.error("Something went wrong !!", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    break;
            }

        }
    }, [error, googleError]);




    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [resetPassEmail, setResetPassEmail] = useState('');


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
        signInWithEmailAndPassword(email, password);
    }

    // reset password //
    const getPasswordResetEmail = (event) => {
        const resetPassEmail = event.target.value;
        setResetPassEmail(resetPassEmail);
    }
    const [sendPasswordResetEmail, resetPassSending, resetPassError] = useSendPasswordResetEmail(
        auth
    );

    

    const resetPasswordSubmitBtn = (event) => {
        event.preventDefault();
        sendPasswordResetEmail(resetPassEmail);
        setShow(false);
    }

    useEffect(()=>{
        if (resetPassSending) {
            toast.success("Reset Password link sent to your email. !!", {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    },[resetPassSending]);


    useEffect(() => {
        if (resetPassError) {
            switch (resetPassError?.code) {
                case 'auth/user-not-found':
                    toast.error("User not found !!", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    break;
                case 'auth/too-many-requests' :
                    toast.error("Too Many Request.Try Later !!", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    break;
            
                default:
                    toast.error("Something went wrong !!", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    break;
            }
            
        }

    }, [resetPassError]);




    if (loading || googleLoading) {
        return <Loading />
    }
    return (

        <div>

            <Modal show={show} onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter" size='sm'
                centered>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <form onSubmit={resetPasswordSubmitBtn}>
                        <div className='forgot-pass-section'>
                            <Modal.Title className='reset-password-heading'>Reset Password</Modal.Title>
                            <p className='mt-0'>Enter your Registered Email </p>
                            <input onBlur={getPasswordResetEmail} className='form-control' type="email" placeholder='Enter E-mail' required />
                            <button
                                className='btn btn-secondary  mt-3 mb-4' type="submit">Reset Password</button>

                        </div>
                    </form>
                </Modal.Body>
            </Modal>


            <div className='form-container mb-5'>
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

                <div onClick={() => signInWithGoogle()} className="login-methods">
                    <div className="login-container">
                        <p>Continue with <img src="./google.png" alt="" /> Google</p>
                    </div>
                </div>

                <p className='text-center mt-2'>Don't Have a Account? <span> <Link to='/register'>Please Register</Link> </span></p>

                <p onClick={handleShow} style={{ lineHeight: '0.1' }} className='text-center mt-2 '>Forgot Password? <span className='reset-password-btn'>Reset Password </span></p>




            </div>
            <ToastContainer />
            <Footer />
        </div>

    );
};

export default Login;