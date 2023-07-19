import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MainLayout from 'layout/MainLayout';

// login option routing
const Department = Loadable(lazy(() => import('views/admin/department')));
const Quiz = Loadable(lazy(() => import('views/admin/quiz')));
const Question = Loadable(lazy(() => import('views/admin/quiz/question')));
const Option = Loadable(lazy(() => import('views/admin/quiz/option')));
const OptionSkill = Loadable(lazy(() => import('views/admin/quiz/optionskill')));
const Skill = Loadable(lazy(() => import('views/admin/skill')));

const User = Loadable(lazy(() => import('views/admin/user')));

const Result = Loadable(lazy(() => import('views/admin/result')));

// ==============================|| ADMIN ROUTING ||============================== //

const AdminRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/admin/departments',
            element: <Department />
        },
        {
            path: '/admin/quizzes',
            element: <Quiz />
        },
        {
            path: '/admin/quiz/:id',
            element: <Question />
        },
        {
            path: '/admin/question/:id',
            element: <Option />
        },
        {
            path: '/admin/option/:id',
            element: <OptionSkill />
        },
        {
            path: '/admin/skills',
            element: <Skill />
        },
        {
            path: '/admin/users',
            element: <User />
        },
        {
            path: '/admin/results',
            element: <Result />
        }
    ]
};

export default AdminRoutes;
