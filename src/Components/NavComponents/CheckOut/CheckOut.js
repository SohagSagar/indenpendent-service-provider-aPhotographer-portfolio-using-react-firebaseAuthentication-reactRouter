import { Toast } from 'bootstrap';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Utilities/firebase.init';
import Services from '../../Home/Services/Services';
import Footer from '../../SharedComponent/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckOut = () => {
    
    return (
        <div>
            <Services/>
            <Footer/>
            <ToastContainer />
        </div>
    );
};

export default CheckOut;