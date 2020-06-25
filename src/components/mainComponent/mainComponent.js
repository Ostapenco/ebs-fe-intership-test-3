import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Days from '../days/days';
import SingleDayForecast from '../singleDayForecast/singleDayForecast';
import Spinner from '../spinner/spinner';
import './mainComponent.css';


function MainComponent() {
    // const [openDay, setOpenDay] = useState();
    const [loading, setLoading] = useState(true);
    const [weatherData, setWeatherData] = useState([]);
    const [allData, setAllData] = useState([]);
    const [dailyForecast, setDailyForecast] = useState([]);
    const [isHomePageOpen, setIsHomePageOpen] = useState(true);

    const getWeatherData = (data) => {
        const arr = [];
        for (let i = 0; i < data.length; i++) {
            i % 8 === 0 && arr.push(data[i])
        }
        setWeatherData(arr);
        setAllData(data);
        setLoading(false);
    };

    useEffect(() => {
        axios.get('https://api.openweathermap.org/data/2.5/forecast?id=618426&appid=c2126ddbad599441b6b459bc90a0ec70')
            .then(res => getWeatherData(res.data.list))
            .catch(err => console.error('This is an error', err));
    }, [])



    const handleClick = (chosenDay) => {
        const neededDate = chosenDay.dt_txt.split(' ')[0]
        const newArray = allData.filter(day =>
            day.dt_txt.split(' ')[0] === neededDate
        );

        return setDailyForecast(newArray),
            setIsHomePageOpen(false)
    }

    const getIcon = (code) => {
        const imgUrl = `http://openweathermap.org/img/wn/${code}@2x.png`

        return <img src={imgUrl} alt='icon' />
    }

    const getSmallIcons = (dataArray) => dataArray.map(day => <div key={day.dt}>{getIcon(day.weather[0].icon)}</div>)

    // const adjustSmallIcons = (type) => setIconClass(type)

    const handleHourlyClick = () => {
        return setIsHomePageOpen(false), handleClick(weatherData[0]);
    }

    console.log("MainComponent -> dailyForecast", dailyForecast)

    return (
        <Router>
            <div className='outerContainer'>
                <div className='headerContainer'>
                    <h1>Weather Chisinau</h1>
                    {loading ? (
                        <Spinner />
                    ) : (
                            <div className={isHomePageOpen ? 'smallIcons5Days' : 'smallIconsDaily'}>
                                {getSmallIcons(isHomePageOpen ? weatherData : dailyForecast)}
                            </div>)}
                    <ul>
                        <li>
                            <Link to="/"
                                onClick={() => setIsHomePageOpen(true)}
                            >5 days</Link>
                        </li> |
                        <li>
                            <Link to="/dailyForecast"
                                onClick={handleHourlyClick}
                            >Hourly</Link>
                        </li>
                    </ul>
                </div>

                {loading ? (
                    <Spinner />
                ) : (
                        <Switch>
                            <Route exact path="/">
                                <Days
                                    weatherData={weatherData}
                                    allData={allData}
                                    handleCardClick={handleClick}
                                    getIcon={getIcon}
                                    getSmallIcons={getSmallIcons}
                                    handleHourlyClick={handleHourlyClick}
                                />
                            </Route>
                            <Route path="/dailyForecast">
                                <SingleDayForecast
                                    dailyForecast={dailyForecast}
                                    getIcon={getIcon}
                                    getSmallIcons={getSmallIcons}
                                />
                            </Route>
                        </Switch>

                    )
                }
            </div >
        </Router >
    );

}

export default MainComponent;
