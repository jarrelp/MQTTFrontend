// third-party
import { combineReducers } from 'redux';

// project imports
import snackbarReducer from './slices/snackbar';
import departmentReducer from './slices/departments';
import skillReducer from './slices/skills';
import userReducer from './slices/user';
// import activeQuestionReducer from './slices/activeQuestion';
import quizReducer from './slices/quiz';
import questionReducer from './slices/question';
import optionReducer from './slices/option';
import optionSkillReducer from './slices/optionSkill';
import resultReducer from './slices/result';
import loadingReducer from './slices/loading';

import menuReducer from './slices/menu';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    snackbar: snackbarReducer,
    department: departmentReducer,
    quiz: quizReducer,
    result: resultReducer,
    menu: menuReducer,
    skill: skillReducer,
    user: userReducer,
    loading: loadingReducer,
    question: questionReducer,
    option: optionReducer,
    optionSkill: optionSkillReducer
    // ,
    // activeQuestion: activeQuestionReducer
});

export default reducer;
