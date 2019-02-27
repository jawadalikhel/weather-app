import React, { Component } from 'react';
// const apiFetch = await fetch(`api.openweathermap.org/data/2.5/forecast/daily?q=${city},${country}&cnt={16}`)
import Form from './Component/Form';
import Title from './Component/Title';
import Weather from './Component/Weather';


class App extends Component {
  constructor(){
    super();
    this.state = {
      temperature: '',
      city:'',
      country: '',
      humidity: '',
      description: '',
      error: '',
    }
  }

  getWeather = async(e) =>{
    e.preventDefault();
    try {
      let city = e.target.elements.city.value;
      let country = e.target.elements.country.value;

      const apiCall = await fetch(`api.openweathermap.org/data/2.5/forecast/daily?q=${city},${country}&cnt={3}`)
      const data = await apiCall.json();

      if(data.code === '404'){
        this.setState({
          error: 'Invalid Entry (not Found)'
        })
      }else if( city && country){
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          county: data.country,
          humidity: data.humidity,
          description: data.description,
          icon: data.icon,
          error: null,

        })
      }


    } catch (err) {
      console.log(err, ' eroor in getWeather')
    } finally {

    }
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    )
  }
}

export default App;
