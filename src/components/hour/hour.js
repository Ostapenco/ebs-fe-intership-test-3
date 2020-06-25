import React from 'react'

import './hour.css';

function Hour({ day, temp, weather, icon, data, handleCardClick }) {

    return (
        <div className='hourContainer' onClick={() => handleCardClick(data)}>
            <h4>{day}</h4>
            {icon}
            <p>{temp}, {weather}</p>
        </div>
    )
}

export default Hour;