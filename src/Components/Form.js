import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// const apiFetch = await fetch(`api.openweathermap.org/data/2.5/forecast/daily?q=${city},${country}&cnt={16}`)


class Form extends Component {
  constructor(){
    super();
    this.state = {
      city: '',
      country: ''
    }
  }

  render() {
    return (
      <div className="">
        <form onSubmit={this.getWeather}>
          <input type="text" name="city" placeholder="City" />
          <input type="text" name="country" placeholder="Country" />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default Form;
