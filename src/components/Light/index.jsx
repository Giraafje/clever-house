import React, {useState} from 'react';
import lightOn from './images/light-on.svg';
import lightOff from './images/light-off.svg';
import './light.css';

const Light = ({name, state}) => {
    const [lightState, setLightState] = useState(state)

    const handleClick = () => {
        if (lightState === "on") {
            setLightState("off")
        } else {
            setLightState("on")
        }
    }

    return (
        <div className="light" onClick={handleClick}>
            <div className="light__icon">
                <img src={lightState === "off" ? lightOff : lightOn}/>
            </div>
            <div className="light__name">
                {name}
            </div>
		</div>
    )
};

export default Light;