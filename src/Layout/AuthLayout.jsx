import React from 'react';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-300 min-h-screen'>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;