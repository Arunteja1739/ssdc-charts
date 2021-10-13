import BarChart from './Bar';
import BarData from '../data/BarData.json';
import LineChart from './Line';
import LineChartData from '../data/StackedLineData.json';
import SingleLineData from './Line/SingleLineData.json';
import PieChart from './Pie';
import PieChartData from '../data/PieData.json';
import StackedAreaChart from './StackedArea';
import StackedAreaChartData from '../data/StackedAreaData.json'

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
    },
];

export default Charts;