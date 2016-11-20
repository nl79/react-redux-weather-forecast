import React, { Component} from 'react';
import {connect} from 'react-redux';

import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends Component {
  renderWeather(cityData) {
    console.log('cityData', cityData);
    var temps = [], humidity = [], pressure = [],
      {lon, lat} = cityData.city.coord;
    cityData.list.forEach((o) => {
      temps.push(o.main.temp);
      humidity.push(o.main.humidity);
      pressure.push(o.main.pressure);
    });

    //console.log('temps', temps);
    return (
      <tr key={cityData.city.id}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td><Chart data={temps} color={"yellow"} units="K"/></td>
        <td><Chart data={pressure} color={"red"} units="hPa"/></td>
        <td><Chart data={humidity} color={"blue"} units="%"/></td>
      </tr>
    )
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)-</th>
            <th>Humidity (%)---</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return {
    // the 'weather' key should match the reducer state name that is used to
    // provide the data to this componenet
    weather
  }
}
// Export the connected component
export default connect(mapStateToProps)(WeatherList);
