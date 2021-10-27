import React from 'react';
import { Link } from 'react-router-dom';
import NivoLogo from '../../assets/logos/nivologo.png';
import RechartsLogo from '../../assets/logos/recharts.png';
import VictoryLogo from '../../assets/logos/victory.svg';
import Map from '../../assets/logos/map.jpg';
import Header from '../Header';
import './index.scss';


const charts = [
    {
        id: 1,
        name: "Nivo Charts",
        path: "/nivo",
        logo: NivoLogo,
        height: "75px",
        width: "75px"
    },
    {
        id: 2,
        name: "Recharts",
        path: "/recharts",
        logo: RechartsLogo,
        height: "75px",
        width: "230px",
        excludeTitle: true,
    },
    {
        id: 3,
        name: "Victory Charts",
        path: "/victory",
        logo: VictoryLogo,
        height: "75px",
        width: "75px"
    },
    {
        id: 4,
        name: "Maps",
        path: "/maps",
        logo: Map,
        height: "80px",
        width: "100px"
    },
]

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <Header />
                <div className="max-width-container">
                    <div className="ssdc-chart-cards">
                        {
                            charts.map(chart => (
                                <Link key={chart.id} to={chart.path}>
                                    <div className="ssdc-chart-card center fadeup-animation">
                                        <img height={chart.height} width={chart.width} src={chart.logo} alt={chart.name} />
                                        {!chart?.excludeTitle && <span className="ssdc-chart-card-title">{chart.name}</span>}
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </>
        );
    }
}

export default Home;