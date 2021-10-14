import Home from '../Containers/Home';
import NivoCharts from '../Containers/Nivo';
import Recharts from '../Containers/Recharts';
import VictoryCharts from '../Containers/Victory';

const routes = [
    {
        component: Home,
        path:"/",
        exact:true
    },
    {
        component: NivoCharts,
        path:"/nivo",
        exact:true
    },
    {
        component: Recharts,
        path:"/recharts",
        exact:true
    },
    {
        component: VictoryCharts,
        path:"/victory",
        exact:true
    },
]

export default routes;