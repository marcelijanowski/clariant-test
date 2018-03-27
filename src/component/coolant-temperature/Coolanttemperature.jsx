import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend}  from 'recharts';


class Coolanttemperature extends Component {
  render() {
    const { data, title } = this.props;
    return (
      <React.Fragment>
        <h4>{title}</h4>
        <LineChart width={1200} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="date"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="reading" stroke="#2ca02c" activeDot={{r: 8}}/>
      </LineChart>
      </React.Fragment>
    );
  }
}

Coolanttemperature.propTypes = {
  data: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
}

export default Coolanttemperature;
