import React from 'react';


class Weather extends React.Component {

  render() {
    return (
      <div className="">
        {this.props.city && this.props.country && <p>description: {this.props.description}</p>}
      </div>
    );
  }
}

export default Weather;
