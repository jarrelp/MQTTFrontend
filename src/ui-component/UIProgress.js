import React from 'react';
import { styled } from '@mui/material/styles';

// material-ui
import { Grid, LinearProgress, Typography, linearProgressClasses } from '@mui/material';

// ==============================|| UI PROGRESS ||============================== //

const BorderLinearProgress = styled(LinearProgress)({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {},
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5
    }
});

const Persentage = (value, maxValue) => {
    var x = value / maxValue;
    var y = x * 100;
    var z = y - (1 / maxValue) * 100;
    return z;
};

const UIProgress = (props) => {
    var progress = Persentage(props.value, props.maxValue);

    return (
        <Grid container direction="column" spacing={3}>
            <Grid item xs={12} md={6}>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid item>
                        <Typography variant="caption">Progress</Typography>
                    </Grid>
                    <Grid item xs>
                        <BorderLinearProgress variant="determinate" color="secondary" value={progress} />
                    </Grid>
                    <Grid item>
                        <Typography variant="h6">{Math.round(progress)}%</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default UIProgress;
