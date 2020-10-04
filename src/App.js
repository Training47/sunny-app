import React from 'react';
import Heading from './components/heading';
import Form from './components/form';
import Forecast from './components/forecast';

import './App.css';


const apiKeys = "db3edae1c2c0732332bc6e73a526b116";

  class App extends React.Component {

  state = {
  temperature: "",
  city: "",
  country: "",
  humidity: "",
  wind: "",
  icon: "",
  description: "",
  error: ""
}

getWeather = async(e) => {
  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;
  e.preventDefault();
  
const api_call = await 
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${apiKeys}`);

const response = await api_call.json();
if(city && country){
  this.setState({
  temperature: response.main.temp,
  city: response.name,
  country: response.sys.country,
  humidity: response.main.humidity,
  wind: response.main.wind,
  icon: response.weather[0].icon,
  description: response.weather[0].description,
  error: ''
})

}else{
  this.setState({
    error: "Please fill out field..."
  })
  }
}


  render() {
  return (
    <div className="container">
      <h2><Heading/></h2>
          <Form loadWeather={this.getWeather} />
          <Forecast 
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          wind={this.state.wind}
          icon={this.state.icon}
          description={this.state.description}
          error={this.state.error}
          />
    </div>
    )
  }
}
    


export default App;
