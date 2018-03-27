import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend}  from 'recharts';


class Componentb extends Component {
  render() {
    const { data, title, color } = this.props;
    return (
      <React.Fragment>
        <h4>{title}</h4>
        <BarChart width={1200} height={300} data={data}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis dataKey="date"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend />
        <Bar dataKey="reading" fill={color} />
        </BarChart>
      </React.Fragment>
    );
  }
}

Componentb.propTypes = {
  data: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default Componentb;
