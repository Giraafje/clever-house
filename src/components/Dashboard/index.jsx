import React from 'react';
import Lights from './../Lights';
import './dashboard.css';

const Dashboard = ({data}) => {
    return (
        <main className="dashboard">
            <Lights lights={data.lights}/>
        </main>
    )
};

export default Dashboard;