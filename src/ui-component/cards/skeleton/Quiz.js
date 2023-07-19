// material-ui
import { Grid, Skeleton, CardActions, Button } from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';
import MainCard from '../MainCard';
import SubCard from '../SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import UIProgress from 'ui-component/UIProgress';

// ==============================|| SKELETON APEX RADAR CHART ||============================== //

const Quiz = () => {
    return (
        <MainCard title={<Skeleton variant="text" height={30} />}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} lg={12}>
                    <SubCard>
                        <Grid container spacing={2}>
                            <Grid item xs={2.2} sm={2} md={1.8} lg={1.2} xl={1} display="flex" justifyContent="center" alignItems="center">
                                <Skeleton variant="text" height={30} width={30} />
                            </Grid>
                            <Grid item xs={9.8} sm={10} md={10.2} lg={10.8} xl={11}>
                                <Skeleton variant="text" height={30} />
                                <Skeleton variant="text" height={30} />
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>

                <Grid item xs={12} lg={12}>
                    <SubCard>
                        <Grid container spacing={2}>
                            <Grid item xs={2.2} sm={2} md={1.8} lg={1.2} xl={1} display="flex" justifyContent="center" alignItems="center">
                                <Skeleton variant="text" height={30} width={30} />
                            </Grid>
                            <Grid item xs={9.8} sm={10} md={10.2} lg={10.8} xl={11}>
                                <Skeleton variant="text" height={30} />
                                <Skeleton variant="text" height={30} />
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>

                <Grid item xs={12} lg={12}>
                    <SubCard>
                        <Grid container spacing={2}>
                            <Grid item xs={2.2} sm={2} md={1.8} lg={1.2} xl={1} display="flex" justifyContent="center" alignItems="center">
                                <Skeleton variant="text" height={30} width={30} />
                            </Grid>
                            <Grid item xs={9.8} sm={10} md={10.2} lg={10.8} xl={11}>
                                <Skeleton variant="text" height={30} />
                                <Skeleton variant="text" height={30} />
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>

                <Grid item xs={12} lg={12}>
                    <UIProgress value={1} maxValue={1} />
                    <CardActions>
                        <Grid container justifyContent="space-between" spacing={0}>
                            <Grid item>
                                {false && (
                                    <AnimateButton>
                                        <Button variant="outlined" size="large">
                                            Previous
                                        </Button>
                                    </AnimateButton>
                                )}
                            </Grid>
                            <Grid item>
                                {true && (
                                    <AnimateButton>
                                        <Button variant="contained" size="large">
                                            Next
                                        </Button>
                                    </AnimateButton>
                                )}
                            </Grid>
                        </Grid>
                    </CardActions>
                    <Grid display="flex" justifyContent="center" alignItems="center">
                        <Skeleton variant="text" height={30} width={120} />
                    </Grid>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default Quiz;
