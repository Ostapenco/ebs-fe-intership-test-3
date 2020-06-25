import React from 'react'
import {
    Link
} from "react-router-dom";

import './day.css';

function Day({ day, temp, weather, icon, data, handleCardClick }) {

    return (
        <Link to="/dailyForecast" onClick={() => handleCardClick(data)}>
            <div className='dayContainer'>
                <h4>{day}</h4>
                {icon}
                <p>{temp}, {weather}</p>
            </div>
        </Link>
    )
}

export default Day;
