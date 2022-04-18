import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Utilities/firebase.init';

const Logout = () => {
    const [user] = useAuthState(auth);
    
    useEffect(()=>{
        signOut(auth);
    },[user]);

    const navigate= useNavigate();
    if(!user){
        navigate('/login');
    }

    return ;
};

export default Logout;