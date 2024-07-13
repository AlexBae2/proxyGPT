import React from 'react';

import { createBrowserRouter } from 'react-router-dom';

import AuthPage from './features/auth/auth';

const router = createBrowserRouter([
    {
        path: '/register',
        element: <AuthPage auth={'register'} />,
    },
    {
        path: '/login',
        element: <AuthPage auth={'login'} />,
    },
]);

export default router;
