import { lazy } from 'react';

// project import
import Loadable from '../Components/Loadable';
import MainLayout from '../layout/MainLayout';

// render - page
const Dashboard = Loadable(lazy(() => import('../pages/Mainpages/Dashboard')));
const RealCasino = Loadable(lazy(() => import('../pages/Mainpages/RealCasino')))
const WelcomePage = Loadable(lazy(() => import('../pages/Mainpages/WelcomePage')))

const MainRoutes = {
    path: '/',
    children: [
        {
            path: '/',
            element: (
                    <MainLayout/>
            ),
            children: [       
                {
                    path: '/',
                    element: <Dashboard />
                },
                {
                    path: 'realcasino',
                    element: <RealCasino/>
                },
                {
                    path: 'welcomepage',
                    element: <WelcomePage/>
                }
              
            ]
        }
    ],
    
}

export default MainRoutes;