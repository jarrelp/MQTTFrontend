// project imports
import services from 'utils/mockAdapter';

const delay = (timeout) => new Promise((res) => setTimeout(res, timeout));

// user list
const users = [
    {
        id: '1',
        name: 'User 1',
        department: 'Department 1'
    },
    {
        id: '2',
        name: 'User 2',
        department: 'Department 1'
    },
    {
        id: '3',
        name: 'User 3',
        department: 'Department 2'
    },
    {
        id: '4',
        name: 'User 4',
        department: 'Department 2'
    },
    {
        id: '5',
        name: 'User 5',
        department: 'Department 3'
    },
    {
        id: '6',
        name: 'User 6',
        department: 'Department 3'
    }
];

// ==============================|| MOCK SERVICES ||============================== //

services.onGet('/api/user/list').reply(async (request) => {
    try {
        await delay(1000);
        return [200, { users }];
    } catch (err) {
        return [500, { message: 'Server Error' }];
    }
});

services.onPost('/api/user/add-user').reply(async (config) => {
    try {
        await delay(200);
        const { user, users } = JSON.parse(config.data);
        const result = {
            users: [...users, user]
        };

        return [200, { ...result }];
    } catch (err) {
        return [500, { message: 'Internal server error' }];
    }
});

services.onPost('/api/user/edit-user').reply(async (config) => {
    try {
        await delay(200);
        const { user, users } = JSON.parse(config.data);

        users.splice(
            users.findIndex((s) => s.id === user.id),
            1,
            user
        );

        const result = {
            users
        };

        return [200, { ...result }];
    } catch (err) {
        return [500, { message: 'Internal server error' }];
    }
});

services.onPost('/api/user/delete-user').reply(async (config) => {
    try {
        await delay(200);
        const { users, userId } = JSON.parse(config.data);

        users.splice(
            users.findIndex((user) => user.id === userId),
            1
        );

        const result = {
            users
        };

        return [200, { ...result }];
    } catch (err) {
        return [500, { message: 'Internal server error' }];
    }
});

services.onPost('/api/user/delete-users').reply(async (config) => {
    try {
        await delay(200);
        const { users, userIds } = JSON.parse(config.data);

        userIds.map((id) =>
            users.splice(
                users.findIndex((user) => user.id === id),
                1
            )
        );

        const result = {
            users
        };

        return [200, { ...result }];
    } catch (err) {
        return [500, { message: 'Internal server error' }];
    }
});
