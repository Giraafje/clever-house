import React from 'react';
import Light from './../Light';
import './lights.css';

const Lights = ({lights}) => {
    return (
        <div className="lights">
            {lights.map((light) => <Light key={light.name} name={light.name} state={light.state}/>)}
        </div>
    )
};

export default Lights;