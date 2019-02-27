import React from 'react';
// const apiFetch = await fetch(`api.openweathermap.org/data/2.5/forecast/daily?q=${city},${country}&cnt={16}`)
import Form from './Components/Form.js';
import Title from './Components/Title.js';
import Weather from './Components/Weather.js';

const API_KEY = "42cc8d4c683df6e17156240c98b54928";


class App extends React.Component {

  getWeather = async (e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
    const data = await api_call.json();
    console.log(data, ' this is the data')
  }

  render() {
    return (
      <div className="">
        <Title />
        <Form getWeather={this.getWeather}/>
        <Weather/>
      </div>
    )
  }
}

export default App;
