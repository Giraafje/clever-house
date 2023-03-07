import React, {useState} from 'react';
import blindsOpen from './images/blinds-open.svg';
import blindsClosed from './images/blinds-closed.svg';
import './blinds.css';

const Blinds = ({state}) => {
    const [blindsState, setBlindsState] = useState(state)

    const handleClickOpen = () => {
        setBlindsState("open")
    }

    const handleClickClosed = () => {
        setBlindsState("closed")
    }
        
    return (
        <div className="blinds">
            <div className="blinds__icon">
                <img src={blindsState === "open" ? blindsOpen : blindsClosed}/>
            </div>
            <div className="blinds__name">
                Žaluzie
            </div>
            <div className="blinds__controls">
                <button onClick={handleClickOpen} className={blindsState === "open" ? "button button--active" : "button"}>Otevřeno</button>
                <button onClick={handleClickClosed} className={blindsState === "closed" ? "button button--active" : "button"}>Zavřeno</button>
            </div>
        </div>
    )
};

export default Blinds;