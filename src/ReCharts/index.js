import BarData from '../data/BarData.json';
import LineChartData from '../data/StackedLineData.json';
import SingleLineData from '../data/SingleLineData.json';
import PieChartData from '../data/PieData.json';
import StackedAreaChartData from '../data/StackedAreaData.json';
import DonutChart from './Donut';
import PieChart from './PieChart';
import StackedBarChart from './StackedBar';
import LineChart from './LineChart';
import StackedAreaChart from './StackedArea';

const Charts = [
    {
        component: LineChart,
        data: SingleLineData,
        type: 'line',
        options: { 
            xAxisOptions:{type:"category",dataKey:"x"}, 
            yAxisOptions:{type:"number",dataKey:"y"},
        }
    },
    {
        component: StackedBarChart,
        data: BarData,
        type: 'bar',
        options: {
            enableGridX: false,
            enableGridY: false,
            xAxisOptions:{dataKey:"country"},
            yAxisOptions:{},
            keys: [
                {
                    "dataKey": "hot dog",
                    "stackId": "a",
                    "fill":"#97e3d5"
                },
                {
                    "dataKey": "burger",
                    "stackId": "a",
                    "fill":"#61cdbb"
                },
                {
                    "dataKey": "sandwich",
                    "stackId": "a",
                    "fill":"#e8a838"
                },
                {
                    "dataKey": "kebab",
                    "stackId": "a",
                    "fill":"#f1e15b"
                },
                {
                    "dataKey": "fries",
                    "stackId": "a",
                    "fill":"#f47560"
                },
                {
                    "dataKey": "donut",
                    "stackId": "a",
                    "fill":"#e8c1a0"
                }
            ]
        }
    },
    {
        component: LineChart,
        data: LineChartData,
        type: 'stackedline',
        options: { 
            xAxisOptions:{type:"category",dataKey:"x",allowDuplicatedCategory:false}, 
            yAxisOptions:{dataKey:"y"},
        }
    },
    {
        component: DonutChart,
        data: PieChartData,
        type: 'donut',
        options: { xAxisOptions:{dataKey:'x', type:'category'}, yAxisOptions:{dataKey:'y', type:'number'}}
    },
    {
        component: PieChart,
        data: PieChartData,
        type: 'pie',
        options: { nameKey: "id" }
    },
    {
        component: StackedAreaChart,
        data: StackedAreaChartData,
        type: 'stackedArea',
        options: { 
            xAxisOptions:{}, 
            yAxisOptions:{},
            keys: [
                {
                    "dataKey": "Raoul",
                    "stackId": "a",
                    "fill": "#97e3d5"
                },
                {
                    "dataKey": "Josiane",
                    "stackId": "a",
                    "fill": "#61cdbb"
                },
                {
                    "dataKey": "Marcel",
                    "stackId": "a",
                    "fill": "#e8a838"
                },
                {
                    "dataKey": "René",
                    "stackId": "a",
                    "fill": "#f1e15b"
                },
                {
                    "dataKey": "Paul",
                    "stackId": "a",
                    "fill": "#f47560"
                },
                {
                    "dataKey": "Jacques",
                    "stackId": "a",
                    "fill": "#e8c1a0"
                }
            ]
        }
    },
    {
        component: StackedBarChart,
        data: BarData,
        type: 'horizontalbar',
        options: { 
            nableGridX: false, 
            enableGridY: false, 
            layout: 'vertical',
            xAxisOptions:{type:"number",hide:true},
            yAxisOptions:{type:"category",dataKey:"country"},
            keys: [
                {
                    "dataKey": "hot dog",
                    "stackId": "a",
                    "fill":"#97e3d5"
                },
                {
                    "dataKey": "burger",
                    "stackId": "a",
                    "fill":"#61cdbb"
                },
                {
                    "dataKey": "sandwich",
                    "stackId": "a",
                    "fill":"#e8a838"
                },
                {
                    "dataKey": "kebab",
                    "stackId": "a",
                    "fill":"#f1e15b"
                },
                {
                    "dataKey": "fries",
                    "stackId": "a",
                    "fill":"#f47560"
                },
                {
                    "dataKey": "donut",
                    "stackId": "a",
                    "fill":"#e8c1a0"
                }
            ]
         }
    },
];

export default Charts;