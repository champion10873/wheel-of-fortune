import { lazy } from 'react';

// project import
import Loadable from '../Components/Loadable';
import FreeLayout from '../layout/FreeLayout';

// render - page
const FreeGame = Loadable(lazy(() => import('../pages/Freepages/FreeGame')))
const FreeRegister = Loadable(lazy(() => import('../pages/Freepages/FreeRegister')))

const LoginRoutes = {
    path: '/',
    children: [
        {
            path: '/',
            element: (
                <FreeLayout/>
            ),
            children: [
                {
                    path: 'freeregister',
                    element: <FreeRegister />
                },
                {
                    path: 'freegame',
                    element: <FreeGame />
                },
            ]
        }
    ],
   
}

export default FreeLayout;