import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend }  from 'recharts';


class Componenta extends Component {
  render() {
    const { data, title, color } = this.props;
    return (
      <React.Fragment>
      <h4>{title}</h4>
      <AreaChart width={1200} height={300} data={data}
            margin={{top: 10, right: 30, left: 0, bottom: 0}}>
        <XAxis dataKey="date"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Area type='monotone' dataKey='reading' stroke={color} fill={color} />
      </AreaChart>
      </React.Fragment>
    );
  }
}

Componenta.propTypes = {
  data: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default Componenta;
