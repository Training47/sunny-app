import React from 'react';


const Forecast = (props) => {
    return(
        <div className="weather">
            {props.country && props.city && <p>Location: {props.city}, {props.country}</p>}
            {props.icon && <img src={`http://openweathermap.org/img/w/${props.icon}.png`} 
            alt="icon weather"/>}
            {props.temperature && <p>Temperature: {props.temperature}°</p>}
            {props.humidity && <p>Humidity: {props.humidity}%</p>}
            {props.wind && <p>Wind: {props.wind}</p>}
            {props.description && <p>Conditions: {props.description}</p>}
            {props.error && <p>{props.error}</p>}
        </div>
    )
}
export default Forecast;
