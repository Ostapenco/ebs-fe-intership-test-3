import React from 'react';

import './days.css';
import Day from '../day/day'

function Days({ weatherData, allData, handleCardClick, getIcon, adjustSmallIcons }) {

    // const newData = allData.filter(day =>
    //     day.dt_txt.split(' ')[0] === '2020-06-25'
    // );

    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const getDay = (timestamp, dateTime) => {

        const fullDate = new Date(timestamp * 1000);
        const day = weekDays[fullDate.getDay()];
        const date = dateTime.split(' ')[0];

        return `${date}, ${day}`;
    }

    const getCelsius = (valNum) => {
        return `${(valNum - 273.15).toFixed(0)} C`;
    }

    /*
     <div className='topContainer'>
         <div className='smallIcons'>
             {adjustSmallIcons('5days')}
         </div>
     </div>
      */

    return (
        <div className='innerContainer'>
            <div className='bottomContainer'>
                {weatherData.map(day =>
                    <Day
                        key={day.dt}
                        day={getDay(day.dt, day.dt_txt)}
                        temp={getCelsius(day.main.temp)}
                        weather={day.weather[0].main}
                        icon={getIcon(day.weather[0].icon)}
                        data={day}
                        handleCardClick={handleCardClick}
                    />)}
            </div>
        </div>
    )
}

export default Days;