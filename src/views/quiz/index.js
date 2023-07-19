import { useState, useEffect } from 'react';

// import { Link } from 'react-router-dom';

// material-ui
import { Button, CardActions, Grid, Typography } from '@mui/material';

// project imports
import UIProgress from 'ui-component/UIProgress';
import AnimateButton from 'ui-component/extended/AnimateButton';
import Question from './question';
import QuizSkeleton from 'ui-component/cards/skeleton/Quiz';

import { useDispatch, useSelector } from 'store';
import { getActiveQuestionsList, selectActiveQuestions } from 'store/slices/activeQuestion';
import { openDrawer } from 'store/slices/menu';
import { selectLoading } from 'store/slices/loading';

// ==============================|| QUIZ ||============================== //

const Quiz = () => {
    // const dispatch = useDispatch();

    // // quiz data
    // const activeQuestionState = useSelector(selectActiveQuestions);

    // useEffect(() => {
    //     if (activeQuestionState == 0) {
    //         dispatch(getActiveQuestionsList());
    //     }
    //     dispatch(openDrawer(false));
    // }, [dispatch, activeQuestionState]);

    // const isLoading = useSelector(selectLoading);

    // const [number, setNumber] = useState(0);
    // const [option, setOption] = useState([]);

    // const handleChange = (event, newNumber) => {
    //     setNumber(newNumber);
    // };

    // const [activeQuestion, setActiveQuestion] = useState([]);

    // useEffect(() => {
    //     setActiveQuestion(activeQuestionState);
    // }, [activeQuestionState]);

    return (
        <>
            {/* {isLoading ? (
                <QuizSkeleton />
            ) : (
                <Question question={activeQuestion[number]} setOptionOnChange={setOption} questionId={number} optionList={option}>
                    <UIProgress value={number + 1} maxValue={activeQuestion.length - 1} />
                    <CardActions>
                        <Grid container justifyContent="space-between" spacing={0}>
                            <Grid item>
                                {number > 0 && (
                                    <AnimateButton>
                                        <Button variant="outlined" size="large" onClick={(e) => handleChange(e, number - 1)}>
                                            Previous
                                        </Button>
                                    </AnimateButton>
                                )}
                            </Grid>
                            <Grid item>
                                {number < activeQuestion.length - 1 && (
                                    <AnimateButton>
                                        <Button variant="contained" size="large" onClick={(e) => handleChange(e, 1 + number)}>
                                            Next
                                        </Button>
                                    </AnimateButton>
                                )}
                                {number === activeQuestion.length - 1 && (
                                    <AnimateButton>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            // component={Link}
                                            // to="/result"
                                            // onClick={getResult}
                                        >
                                            Result
                                        </Button>
                                    </AnimateButton>
                                )}
                            </Grid>
                        </Grid>
                    </CardActions>
                    <Typography textAlign="center">
                        Question: {number + 1} of {activeQuestion.length}
                    </Typography>
                </Question>
            )} */}
        </>
    );
};

export default Quiz;
