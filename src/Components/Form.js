import React from 'react';

// const apiFetch = await fetch(`api.openweathermap.org/data/2.5/forecast/daily?q=${city},${country}&cnt={16}`)


class Form extends React.Component {
  render() {
    return (
      <div className="">
        <form onSubmit={this.props.getWeather}>
          <input type="text" name="city" placeholder="City.." />
          <input type="text" name="country" placeholder="Country.." />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default Form;
