// project imports
import services from 'utils/mockAdapter';

const delay = (timeout) => new Promise((res) => setTimeout(res, timeout));

// skill list
const skills = [
    {
        id: '1',
        name: 'Skill 1'
    },
    {
        id: '2',
        name: 'Skill 2'
    },
    {
        id: '3',
        name: 'Skill 3'
    },
    {
        id: '4',
        name: 'Skill 4'
    },
    {
        id: '5',
        name: 'Skill 5'
    },
    {
        id: '6',
        name: 'Skill 6'
    }
];

// ==============================|| MOCK SERVICES ||============================== //

services.onGet('/api/skill/list').reply(async (request) => {
    try {
        await delay(1000);
        return [200, { skills }];
    } catch (err) {
        return [500, { message: 'Server Error' }];
    }
});

services.onPost('/api/skill/add-skill').reply(async (config) => {
    try {
        await delay(200);
        const { skill, skills } = JSON.parse(config.data);
        const result = {
            skills: [...skills, skill]
        };

        return [200, { ...result }];
    } catch (err) {
        return [500, { message: 'Internal server error' }];
    }
});

services.onPost('/api/skill/edit-skill').reply(async (config) => {
    try {
        await delay(200);
        const { skill, skills } = JSON.parse(config.data);

        skills.splice(
            skills.findIndex((s) => s.id === skill.id),
            1,
            skill
        );

        const result = {
            skills
        };

        return [200, { ...result }];
    } catch (err) {
        return [500, { message: 'Internal server error' }];
    }
});

services.onPost('/api/skill/delete-skill').reply(async (config) => {
    try {
        await delay(200);
        const { skills, skillId } = JSON.parse(config.data);

        skills.splice(
            skills.findIndex((skill) => skill.id === skillId),
            1
        );

        const result = {
            skills
        };

        return [200, { ...result }];
    } catch (err) {
        return [500, { message: 'Internal server error' }];
    }
});

services.onPost('/api/skill/delete-skills').reply(async (config) => {
    try {
        await delay(200);
        const { skills, skillIds } = JSON.parse(config.data);

        skillIds.map((id) =>
            skills.splice(
                skills.findIndex((skill) => skill.id === id),
                1
            )
        );

        const result = {
            skills
        };

        return [200, { ...result }];
    } catch (err) {
        return [500, { message: 'Internal server error' }];
    }
});
