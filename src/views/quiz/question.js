// material-ui
import { Grid } from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';
import MainCard from 'ui-component/cards/MainCard';
import Option from './option';

// ==============================|| QUESTION ||============================== //

const Question = (props) => {
    return (
        <MainCard title={props.question.description} content={true}>
            <Grid container spacing={gridSpacing}>
                {props.question.options?.map((option, key) => (
                    <Grid item xs={12} lg={12} key={key}>
                        <Option
                            setOptionOnChange={props.setOptionOnChange}
                            questionId={props.questionId}
                            option={option}
                            optionKey={key}
                            optionList={props.optionList}
                        />
                    </Grid>
                ))}
                <Grid item xs={12} lg={12}>
                    {props.children}
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default Question;
