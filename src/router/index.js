import Home from '../Containers/Home';
import NivoCharts from '../Containers/Nivo';
import Recharts from '../Containers/Recharts';
import VictoryCharts from '../Containers/Victory';
import Maps from '../Containers/Maps';

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
    {
        component: Maps,
        path:"/maps",
        exact:true
    },
]

export default routes;