import React from 'react';
import { Outlet } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const ProtectRouter = () => {
    const user = true;
    return user ? <Outlet /> : <LoginForm />
}

export default ProtectRouter
