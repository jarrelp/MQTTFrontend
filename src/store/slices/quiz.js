// third-party
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// project imports
import axios from 'apis/backendApi';

// ----------------------------------------------------------------------

export const getQuizzesList = createAsyncThunk('/api/quizzes/get', async () => {
    try {
        const response = await axios.get('/api/quizzes');
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
});

export const addQuiz = createAsyncThunk('/api/quizzes/post', async (quiz) => {
    try {
        const response = await axios.post('/api/quizzes', quiz);
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
});

export const deleteQuiz = createAsyncThunk('/api/quizzes/delete', async (quizId) => {
    try {
        const response = await axios.delete(`/api/quizzes/${quizId}`);
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
});

export const updateQuiz = createAsyncThunk('/api/quizzes/put', async (quiz) => {
    try {
        const response = await axios.put(`/api/quizzes/${quiz.id}`, quiz);
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
});

const slice = createSlice({
    name: 'quizzes',
    initialState: [],
    extraReducers: {
        [getQuizzesList.fulfilled]: (state, { payload }) => payload,
        [addQuiz.fulfilled]: (state, { payload }) => {
            state.push(payload);
        },
        [deleteQuiz.fulfilled]: (state, { payload }) => {
            let quizIdx = state.findIndex((quiz) => quiz.id === parseInt(payload));
            state.splice(quizIdx, 1);
        },
        [updateQuiz.fulfilled]: (state, { payload }) => {
            let quizIdx = state.findIndex((quiz) => quiz.id === parseInt(payload.id));
            state.splice(quizIdx, 1, payload);
        }
    }
});

export const selectQuizzes = (state) => state.quiz;

export default slice.reducer;

// // third-party
// import { createSlice } from '@reduxjs/toolkit';

// // project imports
// import axios from 'utils/axios';
// import { dispatch } from '../index';

// // ----------------------------------------------------------------------

// const initialState = {
//     error: null,
//     activeQuiz: [],
//     quizzes: [],
//     questions: []
// };

// const slice = createSlice({
//     name: 'quiz',
//     initialState,
//     reducers: {
//         // HAS ERROR
//         hasError(state, action) {
//             state.error = action.payload;
//         },

//         // GET QUIZZES
//         getQuizListSuccess(state, action) {
//             state.quizzes = action.payload;
//         },

//         // GET QUIZ ACTIVE
//         getQuizActiveSuccess(state, action) {
//             state.activeQuiz = action.payload;
//         },

//         // ADD QUIZ
//         addQuizSuccess(state, action) {
//             state.quizzes = action.payload.quizzes;
//         },

//         // EDIT QUIZ
//         editQuizSuccess(state, action) {
//             state.quizzes = action.payload.quizzes;
//         },

//         // DELETE QUIZ
//         deleteQuizSuccess(state, action) {
//             state.quizzes = action.payload.quizzes;
//         },

//         // DELETE QUIZZES
//         deleteQuizzesSuccess(state, action) {
//             state.quizzes = action.payload.quizzes;
//         },

//         // GET QUESTIONS
//         getQuestionsListSuccess(state, action) {
//             state.questions = action.payload;
//         },

//         // ADD QUESTION
//         addQuestionSuccess(state, action) {
//             state.quizzes = action.payload.quizzes;
//         },

//         // EDIT QUESTION
//         editQuestionSuccess(state, action) {
//             state.quizzes = action.payload.quizzes;
//         },

//         // DELETE QUESTION
//         deleteQuestionSuccess(state, action) {
//             state.quizzes = action.payload.quizzes;
//         },

//         // DELETE QUESTIONS
//         deleteQuestionsSuccess(state, action) {
//             state.quizzes = action.payload.quizzes;
//         }
//     }
// });

// // Reducer
// export default slice.reducer;

// // ----------------------------------------------------------------------

// export function getQuizzesList() {
//     return async () => {
//         try {
//             const response = await axios.get('/api/quiz/list');
//             dispatch(slice.actions.getQuizListSuccess(response.data.quizzes));
//         } catch (error) {
//             dispatch(slice.actions.hasError(error));
//         }
//     };
// }

// export function getQuizActive() {
//     return async () => {
//         try {
//             const response = await axios.get('/api/quiz/active');
//             dispatch(slice.actions.getQuizActiveSuccess(response.data.activeQuizQuestions));
//         } catch (error) {
//             dispatch(slice.actions.hasError(error));
//         }
//     };
// }

// export function addQuiz(quiz, quizzes) {
//     return async () => {
//         try {
//             const response = await axios.post('/api/quiz/add-quiz', { quiz, quizzes });
//             dispatch(slice.actions.addQuizSuccess(response.data));
//         } catch (error) {
//             dispatch(slice.actions.hasError(error));
//         }
//     };
// }

// export function editQuiz(quiz, quizzes) {
//     return async () => {
//         try {
//             const response = await axios.post('/api/quiz/edit-quiz', { quiz, quizzes });
//             dispatch(slice.actions.editQuizSuccess(response.data));
//         } catch (error) {
//             dispatch(slice.actions.hasError(error));
//         }
//     };
// }

// export function deleteQuiz(quizId, quizzes) {
//     return async () => {
//         try {
//             const response = await axios.post('/api/quiz/delete-quiz', { quizId, quizzes });
//             dispatch(slice.actions.deleteQuizSuccess(response.data));
//         } catch (error) {
//             dispatch(slice.actions.hasError(error));
//         }
//     };
// }

// export function deleteQuizzes(quizIds, quizzes) {
//     return async () => {
//         try {
//             const response = await axios.post('/api/quiz/delete-quizzes', { quizzes, quizIds });
//             dispatch(slice.actions.deleteQuizzesSuccess(response.data));
//         } catch (error) {
//             dispatch(slice.actions.hasError(error));
//         }
//     };
// }

// //question
// export function getQuestionsList(quizId) {
//     return async () => {
//         try {
//             const response = await axios.post('/api/question/list', { quizId });
//             dispatch(slice.actions.getQuestionsListSuccess(response.data));
//         } catch (error) {
//             dispatch(slice.actions.hasError(error));
//         }
//     };
// }

// export function addQuestion(quizId, question, questions) {
//     return async () => {
//         try {
//             const response = await axios.post('/api/question/add-question', { quizId, question, questions });
//             dispatch(slice.actions.addQuestionSuccess(response.data));
//         } catch (error) {
//             dispatch(slice.actions.hasError(error));
//         }
//     };
// }

// export function editQuestion(quizId, question, questions) {
//     return async () => {
//         try {
//             const response = await axios.post('/api/question/edit-question', { quizId, question, questions });
//             dispatch(slice.actions.editQuestionSuccess(response.data));
//         } catch (error) {
//             dispatch(slice.actions.hasError(error));
//         }
//     };
// }

// export function deleteQuestion(quizId, questionId, questions) {
//     return async () => {
//         try {
//             const response = await axios.post('/api/question/delete-question', { quizId, questions, questionId });
//             dispatch(slice.actions.deleteQuestionSuccess(response.data));
//         } catch (error) {
//             dispatch(slice.actions.hasError(error));
//         }
//     };
// }

// export function deleteQuestions(quizId, questionIds, questions) {
//     return async () => {
//         try {
//             const response = await axios.post('/api/question/delete-questions', { quizId, questions, questionIds });
//             dispatch(slice.actions.deleteQuestionsSuccess(response.data));
//         } catch (error) {
//             dispatch(slice.actions.hasError(error));
//         }
//     };
// }
