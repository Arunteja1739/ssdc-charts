import BarChart from './Bar';
import BarData from './Bar/data.json';
import HorizontalBarData from './Bar/horizontaldata.json';
import LineChart from './Line';
// import LineChartData from './Line/data.json';
import LineChartData from '../data/stackedline-data.json';
import SingleLineData from './Line/SingleLineData.json';
import PieChart from './Pie';
import DonutChartData from './Pie/data.json';
// import PieChartData from './Pie/PieData.json';
import PieChartData from '../data/pie-data.json';
// import StackedAreaChart from './StreamStack';
// import StackedAreaChartData from './StreamStack/data.json';
// import AreaStackedChart from './AreaStack';
// import AreaStackedChartData from './AreaStack/data.json';
import StackedAreaChart from './StackedArea';
import StackedAreaChartData from './StackedArea/data.json'

const Charts = [
    {
        component: LineChart,
        data: SingleLineData,
        type: 'line',
        options: { colors: { datum: 'color' }, enableArea: true, enablePoints: false, enableGridX: false, enableGridY: false }
    },
    {
        component: BarChart,
        data: BarData,
        // options: { colors: ['#1E71ED', '#ff7557', '#80e1d9', '#f8bc3b', '#b2596e', '#0d7ea0', '#3ba974'], colorBy: 'index' },
        type: 'bar',
        options: { enableGridX: false, enableGridY: false }
    },
    {
        component: LineChart,
        data: LineChartData,
        type: 'stackedline',
        options: { enablePoints: true, enableGridX: false, enableGridY: false }
    },
    {
        component: PieChart,
        data: PieChartData,
        type: 'donut'
    },
    {
        component: PieChart,
        data: PieChartData,
        type: 'pie',
        options: { innerRadius: 0 }
    },
    // {
    //     component: AreaStackedChart,
    //     data: AreaStackedChartData,
    //     type: 'stackedArea'
    // },
    // {
    //     component: StackedAreaChart,
    //     data: StackedAreaChartData,
    //     type: 'regularstacked'
    // }
    {
        component: StackedAreaChart,
        data: StackedAreaChartData,
        type: 'stackedArea',
        options: { enableGridX: false, enableGridY: false }
    },
    {
        component: BarChart,
        data: BarData,
        type: 'horizontalbar',
        options: { enableGridX: false, enableGridY: false, layout: 'horizontal', }
        // indexBy: "label", keys: ["All User Profiles", "M5 (* current month)", "M5 (2 months ago)", "M5 (3 months ago)", "M5 (4 months ago)"]
    },
];

// options: { colors: ['#1E71ED', '#ff7557', '#80e1d9', '#f8bc3b', '#b2596e', '#0d7ea0', '#3ba974'], colorBy: 'index' },

export default Charts;