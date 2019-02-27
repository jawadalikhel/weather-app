import React from 'react';
// const apiFetch = await fetch(`api.openweathermap.org/data/2.5/forecast/daily?q=${city},${country}&cnt={16}`)
import Form from './Components/Form.js';
import Title from './Components/Title.js';
import Weather from './Components/Weather.js';

const API_KEY = "42cc8d4c683df6e17156240c98b54928";


class App extends React.Component {
  state = {
    temperature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    icon: '',
    error: '',
  }

  getWeather = async (e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
    const data = await api_call.json();

    if(city && country){
      console.log(data, ' this is the data')
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        error: ""
      })
    }else {
      this.setState({
        temperature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        icon: '',
        error: 'Entery Both City and Country to Get Weather Report'
      })
    }
  }

  render() {
    console.log(this.state, ' THIS IS THE STATE')
    return (
      <div className="app">
        <Title />
        <Form getWeather={this.getWeather}/>
        <Weather temperature={this.state.temperature}
                 city={this.state.city}
                 country={this.state.country}
                 humidity={this.state.humidity}
                 description={this.state.description}
                 icon={this.state.icon}
                 error={this.state.error}
        />
      </div>
    )
  }
}

export default App;
