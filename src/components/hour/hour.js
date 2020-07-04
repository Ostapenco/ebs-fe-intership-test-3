import React from 'react'

import './hour.css';

function Hour({ day, temp, weather, icon }) {

    return (
        <div className='hourContainer'>
            <h5>{day}</h5>
            {icon}
            <p>{temp}, {weather}</p>
        </div>
    )
}

export default Hour;