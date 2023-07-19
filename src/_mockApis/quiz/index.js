// project imports
import services from 'utils/mockAdapter';

const delay = (timeout) => new Promise((res) => setTimeout(res, timeout));

// question list of active quiz
const activeQuizQuestions = [
    {
        id: '1',
        description: 'question1',
        options: [
            {
                id: '1',
                description: 'question1option1'
            },
            {
                id: '2',
                description: 'question1option2'
            },
            {
                id: '3',
                description: 'question1option3'
            }
        ]
    },
    {
        id: '2',
        description: 'question2',
        options: [
            {
                id: '4',
                description: 'question2option1'
            },
            {
                id: '5',
                description: 'question2option2'
            },
            {
                id: '6',
                description: 'question2option3'
            }
        ]
    },
    {
        id: '3',
        description: 'question3',
        options: [
            {
                id: '7',
                description: 'question3option1'
            },
            {
                id: '8',
                description: 'question3option2'
            },
            {
                id: '9',
                description: 'question3option3'
            }
        ]
    },
    {
        id: '4',
        description: 'question4',
        options: [
            {
                id: '10',
                description: 'question4option1'
            },
            {
                id: '11',
                description: 'question4option2'
            },
            {
                id: '12',
                description: 'question4option3'
            }
        ]
    },
    {
        id: '5',
        description: 'question5',
        options: [
            {
                id: '13',
                description: 'question5option1'
            },
            {
                id: '14',
                description: 'question5option2'
            },
            {
                id: '15',
                description: 'question5option3'
            }
        ]
    },
    {
        id: '6',
        description: 'question6',
        options: [
            {
                id: '16',
                description: 'question6option1'
            },
            {
                id: '17',
                description: 'question6option2'
            },
            {
                id: '18',
                description: 'question6option3'
            }
        ]
    },
    {
        id: '7',
        description: 'question7',
        options: [
            {
                id: '19',
                description: 'question7option1'
            },
            {
                id: '20',
                description: 'question7option2'
            },
            {
                id: '21',
                description: 'question7option3'
            }
        ]
    },
    {
        id: '8',
        description: 'question8',
        options: [
            {
                id: '22',
                description: 'question8option1'
            },
            {
                id: '23',
                description: 'question8option2'
            },
            {
                id: '24',
                description: 'question8option3'
            }
        ]
    },
    {
        id: '9',
        description: 'question9',
        options: [
            {
                id: '25',
                description: 'question9option1'
            },
            {
                id: '26',
                description: 'question9option2'
            },
            {
                id: '27',
                description: 'question9option3'
            }
        ]
    },
    {
        id: '10',
        description: 'question10',
        options: [
            {
                id: '28',
                description: 'question10option1'
            },
            {
                id: '29',
                description: 'question10option2'
            },
            {
                id: '30',
                description: 'question10option3'
            }
        ]
    },
    {
        id: '11',
        description: 'question11',
        options: [
            {
                id: '31',
                description: 'question11option1'
            },
            {
                id: '32',
                description: 'question11option2'
            },
            {
                id: '33',
                description: 'question11option3'
            }
        ]
    },
    {
        id: '12',
        description: 'question12',
        options: [
            {
                id: '34',
                description: 'question12option1'
            },
            {
                id: '35',
                description: 'question12option2'
            },
            {
                id: '36',
                description: 'question12option3'
            }
        ]
    }
];

// quiz list
const quizzes = [
    {
        id: '1',
        name: 'quiz1',
        active: 'true',
        questions: activeQuizQuestions
    }
];

// ==============================|| MOCK SERVICES ||============================== //

services.onGet('/api/quiz/list').reply(async (request) => {
    try {
        await delay(1000);
        return [200, { quizzes }];
    } catch (err) {
        return [500, { message: 'Server Error' }];
    }
});

services.onGet('/api/quiz/active').reply(async (request) => {
    try {
        await delay(1000);
        return [200, { activeQuizQuestions }];
    } catch (err) {
        return [500, { message: 'Server Error' }];
    }
});

services.onPost('/api/quiz/add-quiz').reply(async (config) => {
    try {
        await delay(200);
        const { quiz, quizzes } = JSON.parse(config.data);
        const result = {
            quizzes: [...quizzes, quiz]
        };

        return [200, { ...result }];
    } catch (err) {
        return [500, { message: 'Internal server error' }];
    }
});

services.onPost('/api/quiz/edit-quiz').reply(async (config) => {
    try {
        await delay(200);
        const { quiz, quizzes } = JSON.parse(config.data);

        quizzes.splice(
            quizzes.findIndex((s) => s.id === quiz.id),
            1,
            quiz
        );

        const result = {
            quizzes
        };

        return [200, { ...result }];
    } catch (err) {
        return [500, { message: 'Internal server error' }];
    }
});

services.onPost('/api/quiz/delete-quiz').reply(async (config) => {
    try {
        await delay(200);
        const { quizzes, quizId } = JSON.parse(config.data);

        quizzes.splice(
            quizzes.findIndex((quiz) => quiz.id === quizId),
            1
        );

        const result = {
            quizzes
        };

        return [200, { ...result }];
    } catch (err) {
        return [500, { message: 'Internal server error' }];
    }
});

services.onPost('/api/quiz/delete-quizzes').reply(async (config) => {
    try {
        await delay(200);
        const { quizzes, quizIds } = JSON.parse(config.data);

        quizIds.map((id) =>
            quizzes.splice(
                quizzes.findIndex((quiz) => quiz.id === id),
                1
            )
        );

        const result = {
            quizzes
        };

        return [200, { ...result }];
    } catch (err) {
        return [500, { message: 'Internal server error' }];
    }
});

//question
services.onPost('/api/question/list').reply(async (config) => {
    try {
        await delay(1000);
        const { quizId } = JSON.parse(config.data);

        const quiz = quizzes.find((s) => s.id === quizId);

        return [200, quiz.questions];
    } catch (err) {
        return [500, { message: 'Server Error' }];
    }
});

services.onPost('/api/question/add-question').reply(async (config) => {
    try {
        await delay(200);
        const { quizId, question, quizzes } = JSON.parse(config.data);

        const quiz = quizzes.findIndex((s) => s.id === quizId);
        // const currentQuestions = quiz.map((q) => q.questions);
        // currentQuestions.splice(
        //     currentQuestions.findIndex((s) => s.id === question.id),
        //     1,
        //     question
        // );
        quiz.questions.push(question);

        quizzes.splice(
            quizzes.findIndex((s) => s.id === quizId),
            1,
            quiz
        );

        const result = {
            quizzes
        };

        return [200, { ...result }];
    } catch (err) {
        return [500, { message: 'Internal server error' }];
    }
});

services.onPost('/api/question/edit-question').reply(async (config) => {
    try {
        await delay(200);
        const { quizId, question, quizzes } = JSON.parse(config.data);

        const quiz = quizzes.findIndex((s) => s.id === quizId);
        // const currentQuestions = quiz.map((q) => q.questions);
        // currentQuestions.splice(
        //     currentQuestions.findIndex((s) => s.id === question.id),
        //     1,
        //     question
        // );
        quiz.questions.splice(
            quiz.questions.findIndex((s) => s.id === question.id),
            1,
            question
        );

        quizzes.splice(
            quizzes.findIndex((s) => s.id === quizId),
            1,
            quiz
        );

        const result = {
            quizzes
        };

        return [200, { ...result }];
    } catch (err) {
        return [500, { message: 'Internal server error' }];
    }
});

services.onPost('/api/question/delete-question').reply(async (config) => {
    try {
        await delay(200);
        const { quizId, questionId, quizzes } = JSON.parse(config.data);

        const quiz = quizzes.findIndex((s) => s.id === quizId);
        // const currentQuestions = quiz.map((q) => q.questions);
        // currentQuestions.splice(
        //     currentQuestions.findIndex((s) => s.id === question.id),
        //     1,
        //     question
        // );
        quiz.questions.splice(
            quiz.questions.findIndex((s) => s.id === questionId),
            1
        );

        quizzes.splice(
            quizzes.findIndex((s) => s.id === quizId),
            1,
            quiz
        );

        const result = {
            quizzes
        };

        return [200, { ...result }];
    } catch (err) {
        return [500, { message: 'Internal server error' }];
    }
});

services.onPost('/api/question/delete-questions').reply(async (config) => {
    try {
        await delay(200);
        const { quizId, questionIds, quizzes } = JSON.parse(config.data);

        const quiz = quizzes.findIndex((s) => s.id === quizId);
        // const currentQuestions = quiz.map((q) => q.questions);
        // currentQuestions.splice(
        //     currentQuestions.findIndex((s) => s.id === question.id),
        //     1,
        //     question
        // );
        questionIds.map((id) =>
            quiz.questions.splice(
                quiz.questions.findIndex((s) => s.id === id),
                1
            )
        );

        quizzes.splice(
            quizzes.findIndex((s) => s.id === quizId),
            1,
            quiz
        );

        const result = {
            quizzes
        };

        return [200, { ...result }];
    } catch (err) {
        return [500, { message: 'Internal server error' }];
    }
});
