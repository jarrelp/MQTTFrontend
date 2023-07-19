import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';

// result routing
const Result = Loadable(lazy(() => import('views/result')));

// quiz routing
const Quiz = Loadable(lazy(() => import('views/quiz')));

// application - account profile routing
const AppUserAccountProfile = Loadable(lazy(() => import('views/account/account-settings')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: (
        <AuthGuard>
            <MainLayout />
        </AuthGuard>
    ),
    children: [
        {
            path: '/',
            element: <Result />
        },
        {
            path: '/result',
            element: <Result />
        },
        {
            path: '/quiz',
            element: <Quiz />
        },
        {
            path: '/account/account-settings',
            element: <AppUserAccountProfile />
        }
    ]
};

export default MainRoutes;
