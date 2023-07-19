import React from 'react';

import { Grid, Radio, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// constants
import { gridSpacing } from 'store/constant';

// project imports
import SubCard from 'ui-component/cards/SubCard';

// ==============================|| OPTION ||============================== //

const Option = (props) => {
    const theme = useTheme();
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));

    let list = props.optionList;

    const handleChange = () => {
        props.setOptionOnChange((list) => ({
            ...list,
            [props.questionId]: props.option.id
        }));
    };

    const intToChar = (int) => {
        return String.fromCharCode('A'.charCodeAt(0) + int);
    };

    return (
        <div onClick={handleChange}>
            <SubCard>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={2.2} sm={2} md={1.8} lg={1.2} xl={1}>
                        <Radio
                            aria-label={props.questionId}
                            value={props.option.id}
                            onChange={handleChange}
                            checked={list[props.questionId] === props.option.id}
                            name={props.questionId.toString()}
                        />
                        {matchUpSm && <label>{intToChar(props.optionKey)}</label>}
                    </Grid>
                    <Grid item xs={9.8} sm={10} md={10.2} lg={10.8} xl={11}>
                        <Typography>{props.option.description}</Typography>
                    </Grid>
                </Grid>
            </SubCard>
        </div>
    );
};

export default Option;
