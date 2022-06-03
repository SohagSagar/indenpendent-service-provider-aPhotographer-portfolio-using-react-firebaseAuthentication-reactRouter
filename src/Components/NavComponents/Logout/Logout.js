import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Utilities/firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Logout = () => {
    const [user] = useAuthState(auth);
    
    
    useEffect(()=>{
        signOut(auth);
    },[user]);

    const navigate= useNavigate();
    useEffect(()=>{
        if(!user){
            toast.success("Logout Successful !!", {
                position: toast.POSITION.TOP_RIGHT
            });
            navigate('/login');
        }

    },[user]);
    <ToastContainer />

    return ;
};

export default Logout;