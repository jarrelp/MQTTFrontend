// material-ui
import { Grid } from '@mui/material';

// project imports
import ApexRadarChart from './ApexRadarChart';
import { gridSpacing } from 'store/constant';

// ==============================|| DEFAULT Result ||============================== //

const Result = () => {
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={12} md={10} lg={8} xl={6}>
                <ApexRadarChart />
            </Grid>
        </Grid>
    );
};

export default Result;
