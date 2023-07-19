// project imports
import services from 'utils/mockAdapter';

const delay = (timeout) => new Promise((res) => setTimeout(res, timeout));

// result chart data
const chartData = [
    {
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20]
    }
];

// const chartData = {
//     type: 'radar',
//     options: {
//         chart: {
//             toolbar: {
//                 show: false
//             }
//         },
//         dataLabels: {
//             enabled: false
//         },
//         responsive: [
//             {
//                 breakpoint: 450,
//                 chart: {},
//                 options: {
//                     legend: {
//                         show: false,
//                         position: 'bottom'
//                     }
//                 }
//             }
//         ],
//         plotOptions: {
//             radar: {
//                 polygons: {
//                     strokeColors: '#e9e9e9',
//                     fill: {
//                         colors: ['#f8f8f8', '#fff']
//                     }
//                 }
//             }
//         },
//         xaxis: {
//             categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
//         }
//     },
//     series: [
//         {
//             name: 'Series 1',
//             data: [80, 50, 30, 40, 100, 20]
//         }
//     ]
// };

// ==============================|| MOCK SERVICES ||============================== //

services.onGet('/api/result/chart').reply(async (request) => {
    try {
        await delay(2000);
        return [200, { chartData }];
    } catch (err) {
        return [500, { message: 'Server Error' }];
    }
});
