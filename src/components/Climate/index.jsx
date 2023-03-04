import React, {useState} from 'react';
import temp from './images/temp.svg'
import './climate.css';

const Climate = ({temperature, humidity}) => {
    const [roomTemperature, setRoomTemperature] = useState(temperature)

    const handleClickIncrease = () => {
        setRoomTemperature(roomTemperature + 1)
    }

    const handleClickDecrease = () => {
        setRoomTemperature(roomTemperature - 1)
    }

    return (
        <div className="climate">
				<div className="climate__icon">
					<img src={temp}/>
				</div>
				<div className="climate__content">
					<div className="climate__temperature">{roomTemperature}&deg;C</div>
					<div className="climate__humidity">Vlhost vzduchu {humidity}&nbsp;%</div>
				</div>
				<div className="climate__controls">
					<button onClick={handleClickIncrease} className="button">+</button>
					<button onClick={handleClickDecrease} className="button">-</button>
				</div>
			</div>
    )
};

export default Climate;