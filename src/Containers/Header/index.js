import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logos/SSDCLogoWithText.svg';
import GithubLogo from '../../assets/logos/github.svg';
import './index.scss';

const pages = [
    {
        _id: 1,
        name: 'Home',
        link: '/',
    },
    {
        _id: 2,
        name: 'Nivo',
        link: '/nivo',
    },
    {
        _id: 3,
        name: 'Victory',
        link: '/victory',
    },
    {
        _id: 4,
        name: 'Recharts',
        link: '/recharts',
    }
];

export default class Header extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {

    }
    render() {
        return (
            <div className="header bg-white">
                <div className="max-width-container h-100 frow f-space-between">
                    <div className="v-center h-100">
                        <img width="300px" src={Logo} alt={"SSDCLOGO"} />
                    </div>
                    <div className="frow h-100 v-center">
                        {
                            pages.map(page => (
                                <Link key={page._id} to={page.link}>
                                    <div title={page.name} className="page pointer large mh-10">
                                        {page.name}
                                    </div>
                                </Link>
                            ))
                        }
                         <a key={"github"} href={"https://github.com/Arunteja1739/ssdc-charts"} target={"_blank"} rel="noopener noreferrer">
                            <img height="30px" src={GithubLogo} alt={"githublogo"} />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}