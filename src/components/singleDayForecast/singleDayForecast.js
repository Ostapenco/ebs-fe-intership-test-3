import React from 'react';

import './singleDayForecast.css';
import Hour from '../hour/hour'

function SingleDayForecast({ dailyForecast, getIcon, adjustSmallIcons }) {
    console.log("SingleDayForecast -> dailyForecast", dailyForecast)


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

    return (
        <div className='innerContainer'>

            <div className='bottomContainer'>
                {dailyForecast.map(day =>
                    <Hour
                        key={day.dt}
                        day={getDay(day.dt, day.dt_txt)}
                        temp={getCelsius(day.main.temp)}
                        weather={day.weather[0].main}
                        icon={getIcon(day.weather[0].icon)}
                        data={day}
                    />)}
            </div>
        </div>
    )
}

export default SingleDayForecast;