// assets
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';

// ==============================|| EXTRA ADMIN FUNCTIONS MENU ITEMS ||============================== //

const adminFunctions = {
    id: 'adminFunctions',
    title: 'AdminFunctions',
    type: 'group',
    children: [
        {
            id: 'adminFunctions',
            title: 'AdminFunctions',
            type: 'collapse',
            icon: AdminPanelSettingsOutlinedIcon,

            children: [
                {
                    id: 'Department',
                    title: 'Department',
                    type: 'item',
                    url: '/admin/departments'
                },
                {
                    id: 'Quiz',
                    title: 'Quiz',
                    type: 'item',
                    url: '/admin/quizzes'
                },
                {
                    id: 'Skill',
                    title: 'Skill',
                    type: 'item',
                    url: '/admin/skills'
                },
                {
                    id: 'User',
                    title: 'User',
                    type: 'item',
                    url: '/admin/users'
                },
                {
                    id: 'Result',
                    title: 'Result',
                    type: 'item',
                    url: '/admin/results'
                }
            ]
        }
    ]
};

export default adminFunctions;
