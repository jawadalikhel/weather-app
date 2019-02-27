import React from 'react';

// const apiFetch = await fetch(`api.openweathermap.org/data/2.5/forecast/daily?q=${city},${country}&cnt={16}`)


const Form = (props) =>{
  return(
    <div className="">
      <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="City.." />
        <input type="text" name="country" placeholder="Country.." />
        <button>Get Weather</button>
      </form>
    </div>
  )
}

export default Form;
