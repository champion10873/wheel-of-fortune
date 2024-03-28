import { lazy } from 'react';

// project import
import Loadable from '../Components/Loadable';
import AuthLayout from '../layout/AuthLayout';

// render - page
const RegisterPage = Loadable(lazy(() => import('../pages/Authpages/RegisterPage')))

const LoginRoutes = {
    path: '/',
    children: [
        {
            path: '/',
            element: (
                <AuthLayout/>
            ),
            children: [
                {
                    path: 'registerpage',
                    element: <RegisterPage />
                }
            ]
        }
    ],
   
}

export default LoginRoutes;