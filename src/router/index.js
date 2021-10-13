import Home from '../Containers/Home';
import NivoCharts from '../Containers/Nivo';

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
    }
]

export default routes;