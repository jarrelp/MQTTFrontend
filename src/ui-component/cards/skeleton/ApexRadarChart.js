// material-ui
import { Card, CardContent, Grid } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

// project imports
import { gridSpacing } from 'store/constant';

// ==============================|| SKELETON APEX RADAR CHART ||============================== //

const ApexRadarChart = () => {
    return (
        <Card>
            <CardContent>
                <Grid container spacing={gridSpacing} sx={{ height: 0, overflow: 'hidden', paddingTop: '100%', position: 'relative' }}>
                    <Grid item xs={12}>
                        <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing}>
                            <Grid item xs zeroMinWidth>
                                <Grid item xs={1}>
                                    <Skeleton variant="text" height={30} sx={{ position: 'absolute', top: 30, left: 30, width: '20%' }} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Skeleton variant="rectangular" sx={{ position: 'absolute', top: 80, left: 30, width: '100%', height: '100%' }} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default ApexRadarChart;
