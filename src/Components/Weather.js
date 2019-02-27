import React from 'react';


const Weather = (props) =>{
  console.log(props, ' this is props')
  return(
    <div className="">
      {props.city && props.country && <p>Location: {props.city},{props.country}</p>}
      {props.temperature && props.temperature && <p>Temperature: {props.temperature}</p>}
      {props.humidity && props.humidity &&<p>Humidity: {props.humidity}</p>}
      {props.description && props.description &&<p>Description: {props.description}</p>}
      {props.icon && props.icon &&<img src={props.icon} />}
      {props.error && <p>{props.error}</p>}
    </div>
  )
}

export default Weather;
// <p>Location: {this.props.city},{this.props.country}</p>
