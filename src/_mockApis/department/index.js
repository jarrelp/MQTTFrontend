// project imports
import services from 'utils/mockAdapter';

const delay = (timeout) => new Promise((res) => setTimeout(res, timeout));

// department list
const departments = [
    {
        id: '1',
        name: 'Department 1'
    },
    {
        id: '2',
        name: 'Department 2'
    },
    {
        id: '3',
        name: 'Department 3'
    },
    {
        id: '4',
        name: 'Department 4'
    },
    {
        id: '5',
        name: 'Department 5'
    },
    {
        id: '6',
        name: 'Department 6'
    }
];

// ==============================|| MOCK SERVICES ||============================== //

services.onGet('/api/department/list').reply(async (request) => {
    try {
        await delay(1000);
        return [200, { departments }];
    } catch (err) {
        return [500, { message: 'Server Error' }];
    }
});

services.onPost('/api/department/add-department').reply(async (config) => {
    try {
        await delay(200);
        const { department, departments } = JSON.parse(config.data);
        const result = {
            departments: [...departments, department]
        };

        return [200, { ...result }];
    } catch (err) {
        return [500, { message: 'Internal server error' }];
    }
});

services.onPost('/api/department/edit-department').reply(async (config) => {
    try {
        await delay(200);
        const { department, departments } = JSON.parse(config.data);

        departments.splice(
            departments.findIndex((s) => s.id === department.id),
            1,
            department
        );

        const result = {
            departments
        };

        return [200, { ...result }];
    } catch (err) {
        return [500, { message: 'Internal server error' }];
    }
});

services.onPost('/api/department/delete-department').reply(async (config) => {
    try {
        await delay(200);
        const { departments, departmentId } = JSON.parse(config.data);

        departments.splice(
            departments.findIndex((department) => department.id === departmentId),
            1
        );

        const result = {
            departments
        };

        return [200, { ...result }];
    } catch (err) {
        return [500, { message: 'Internal server error' }];
    }
});

services.onPost('/api/department/delete-departments').reply(async (config) => {
    try {
        await delay(200);
        const { departments, departmentIds } = JSON.parse(config.data);

        departmentIds.map((id) =>
            departments.splice(
                departments.findIndex((department) => department.id === id),
                1
            )
        );

        const result = {
            departments
        };

        return [200, { ...result }];
    } catch (err) {
        return [500, { message: 'Internal server error' }];
    }
});
