import React from 'react'

import './day.css';

function Day({ day, temp, weather, icon, data, handleCardClick }) {

    return (
        <div className='dayContainer' onClick={() => handleCardClick(data)}>
            <h4>{day}</h4>
            {icon}
            <p>{temp}, {weather}</p>
        </div>
    )
}

export default Day;
