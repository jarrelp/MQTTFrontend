import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

// material-ui
// import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';

// third-party
// import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

// project imports
import SkeletonApexRadarChart from 'ui-component/cards/skeleton/ApexRadarChart';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

import { useDispatch, useSelector } from 'store';
import { getResultsChart } from 'store/slices/result';
import { openDrawer } from 'store/slices/menu';

// ==============================|| RADAR CHART ||============================== //

const chartSettingsInitialState = {
    type: 'radar',
    options: {
        chart: {
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        responsive: [
            {
                breakpoint: 450,
                chart: {},
                options: {
                    legend: {
                        show: false,
                        position: 'bottom'
                    }
                }
            }
        ],
        plotOptions: {
            radar: {
                polygons: {
                    strokeColors: '#e9e9e9',
                    fill: {
                        colors: ['#f8f8f8', '#fff']
                    }
                }
            }
        },
        xaxis: {
            categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        }
    },
    series: []
};

const ApexRadarChart = () => {
    // const theme = useTheme();

    const dispatch = useDispatch();

    const [isLoading, setLoading] = useState(true);

    // result data
    const [chartData, setChartData] = useState([]);
    const resultState = useSelector((state) => state.result);

    const [chartSettings, setChartSettings] = useState(chartSettingsInitialState);

    useEffect(() => {
        setChartData(resultState.seriesData);
    }, [resultState]);

    useEffect(() => {
        dispatch(getResultsChart());

        // hide left drawer when email app opens
        dispatch(openDrawer(false));
    }, [dispatch]);

    useEffect(() => {
        if (chartData.length > 0) {
            setLoading(false);
            var dupe = chartSettings;
            dupe['series'] = chartData;
            setChartSettings(dupe);
        }
    }, [chartData, chartSettings]);

    // const { primary } = theme.palette.text;
    // const grey200 = theme.palette.grey[200];
    // const backColor = theme.palette.background.paper;

    // const secondary = theme.palette.secondary.main;
    // const primaryMain = theme.palette.primary.main;
    // const successDark = theme.palette.success.dark;
    // const error = theme.palette.error.main;
    // const warningDark = theme.palette.warning.dark;
    // const orangeDark = theme.palette.orange.dark;

    // useEffect(() => {
    //     const newChartData = {
    //         ...chartData.options,
    //         colors: [secondary, primaryMain, successDark, error, warningDark, orangeDark],
    //         xaxis: {
    //             labels: {
    //                 style: {
    //                     colors: [primary, primary, primary, primary, primary, primary, primary]
    //                 }
    //             }
    //         },
    //         yaxis: {
    //             labels: {
    //                 style: {
    //                     colors: [primary]
    //                 }
    //             }
    //         },
    //         grid: {
    //             borderColor: grey200
    //         },
    //         legend: {
    //             labels: {
    //                 colors: 'grey.500'
    //             }
    //         },
    //         stroke: {
    //             colors: [backColor]
    //         }
    //     };

    //     // do not load chart when loading
    //     if (!isLoading) {
    //         ApexCharts.exec(`radar-chart`, 'updateOptions', newChartData);
    //     }
    // }, [isLoading]);

    return (
        <>
            {isLoading ? (
                <SkeletonApexRadarChart />
            ) : (
                <MainCard title="result" contentSX={{ padding: 0 }}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Chart {...chartSettings} />
                        </Grid>
                    </Grid>
                </MainCard>
            )}
        </>
    );
};

ApexRadarChart.propTypes = {
    isLoading: PropTypes.bool
};

export default ApexRadarChart;
