import BarData from "../data/BarData.json";
import LineChartData from "../data/StackedLineData.json";
import SingleLineData from "../data/SingleLineData.json";
import PieChartData from "../data/PieData.json";
import StackedAreaChartData from "../data/StackedAreaData.json";
import DonutChart from "./Donut";
import PieChart from "./PieChart";
import StackedBarChart from "./StackedBar";
import LineChart from "./LineChart";
import StackedAreaChart from "./StackedArea";

const Charts = [
  {
    component: LineChart,
    data: SingleLineData,
    type: "line",
    options: {},
  },
  {
    component: StackedBarChart,
    data: BarData,
    type: "bar",
    options: {
      horizontal: false,
      key: "country",
      keys: [
        {
          dataKey: "hot dog",
          fill: "#97e3d5",
        },
        {
          dataKey: "burger",
          fill: "#61cdbb",
        },
        {
          dataKey: "sandwich",
          fill: "#e8a838",
        },
        {
          dataKey: "kebab",
          fill: "#f1e15b",
        },
        {
          dataKey: "fries",
          fill: "#f47560",
        },
        {
          dataKey: "donut",
          fill: "#e8c1a0",
        },
      ],
    },
  },
  {
    component: LineChart,
    data: LineChartData,
    type: "stackedline",
    options: {},
  },
  {
    component: DonutChart,
    data: PieChartData,
    type: "donut",
    options: {
      innerRadius: 50,
      radius: 100,
      x: "label",
      y: "value",
    },
  },
  {
    component: PieChart,
    data: PieChartData,
    type: "pie",
    options: {
      innerRadius: 0,
      radius: 100,
      x: "label",
      y: "value",
    },
  },
  {
    component: StackedAreaChart,
    data: StackedAreaChartData,
    type: "stackedArea",
    options: {
      keys: [
        {
          dataKey: "Raoul",
          fill: "#97e3d5",
        },
        {
          dataKey: "Josiane",
          fill: "#61cdbb",
        },
        {
          dataKey: "Marcel",
          fill: "#e8a838",
        },
        {
          dataKey: "René",
          fill: "#f1e15b",
        },
        {
          dataKey: "Paul",
          fill: "#f47560",
        },
        {
          dataKey: "Jacques",
          fill: "#e8c1a0",
        },
      ],
    },
  },
  {
    component: StackedBarChart,
    data: BarData,
    type: "horizontalbar",
    options: {
      horizontal: true,
      key: "country",
      keys: [
        {
          dataKey: "hot dog",
          fill: "#97e3d5",
        },
        {
          dataKey: "burger",
          fill: "#61cdbb",
        },
        {
          dataKey: "sandwich",
          fill: "#e8a838",
        },
        {
          dataKey: "kebab",
          fill: "#f1e15b",
        },
        {
          dataKey: "fries",
          fill: "#f47560",
        },
        {
          dataKey: "donut",
          fill: "#e8c1a0",
        },
      ],
    },
  },
];

export default Charts;
