import React from 'react';
// const apiFetch = await fetch(`api.openweathermap.org/data/2.5/forecast/daily?q=${city},${country}&cnt={16}`)
import Form from './Components/Form.js';
import Title from './Components/Title.js';
import Weather from './Components/Weather.js';

const API_KEY = `${process.env.REACT_APP_WEATHER_API_KEY}`;

class App extends React.Component {
  state = {
    info: {
      MinTemperature: '',
      MaxTemperature: '',
      city:'',
      country: '',
      humidity: '',
      description: '',
      error: '',
    }
  }

  getWeather = async (e) =>{
    e.preventDefault();
    let city = e.target.elements.city.value;
    let country = e.target.elements.country.value;

    const apiCall = await fetch(`api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=imperial`)
    console.log(apiCall, 'apiCall')
    const data = await apiCall.json();

    console.log(data, ' this is data')

    if(data.code === '404'){
      this.setState({
        error: 'Invalid Entry (not Found)'
      })
    }else if( city && country){
      this.setState({
        // city: data.name,
        // county: data.sys.country,
        // // MinTemperature: data.temperature.min,
        // // MaxTemperature: data.temperature.max,
        // humidity: data.main.humidity,
        // description: data.weather[0].description,
        // icon: data.weather[0].icon,
        // error: null,
        info: data

      })
      console.log(this.state.info, 'THIS IS STATE');

    }
  }

  render() {
    console.log(this.state.info, 'THIS IS STATE');
    return (
      <div className="">
        <Title />
        <Form getWeather={this.getWeather}/>
        <Weather temperature={this.state.temperature}
                 humidity={this.state.humidity}
                 city={this.state.city}
                 country={this.state.country}
                 description={this.state.description}
                 icon={this.state.icon}
                 error={this.state.error}
        />
      </div>
    )
  }
}

export default App;
