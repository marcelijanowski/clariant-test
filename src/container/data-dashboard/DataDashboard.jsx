import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actions } from '../../reducers/dashboard/action';
import Componenta from '../../component/component-a/Componenta';
import Componentb from '../../component/component-b/Componentb';
import Coolanttemperature from '../../component/coolant-temperature/Coolanttemperature';

class DataDashboard extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }
  render() {
    const { 
      componentAData, 
      componentBData, 
      coolantTemperatureData, 
      reactorOutletTemperatureData,
      hotspotTemperatureData,
      yieldProcentData,
      productFlowData
    } = this.props;
    
    if (!componentAData) {
      return false
    }
    return (
      <div>
        <Componenta data={componentAData} title={"Component A"} color={"#8884d8"}/>
        <Componentb data={componentBData} title={"Component B"} color={"#ffc658"} />
        <Coolanttemperature data={coolantTemperatureData} title={"Coolant temperature"} />
        <Componenta data={reactorOutletTemperatureData} title={"Reactor Outlet Temperature"} color={"#1f77b4"}/>
        <Componentb data={hotspotTemperatureData} title={"Hotspot Temperature"} color={"#e377c2"} />
        <Componenta data={yieldProcentData} title={"Yield Procent"} color={"#ff7f0e"}/>
        <Componenta data={productFlowData} title={"Product data flow"} color={"#d62728"}/>
      </div>
    );
  }
}

DataDashboard.propTypes = {
  fetchData: PropTypes.func.isRequired
}
const mapStateToProps = (state) => {
  const { dashboard } = state;
  if (dashboard.data) {
    const {
      ComponentA_flow_kgH, 
      ComponentB_flow_kgH, 
      Coolant_temperature_C, 
      Reactor_outlet_temperature_C,
      Reactor_hotspot_temperature_C,
      Yield_percent,
      Product_flow_tonsperday
    }  = dashboard.data;
    
    return {
      componentAData: ComponentA_flow_kgH,
      componentBData: ComponentB_flow_kgH,
      coolantTemperatureData: Coolant_temperature_C,
      reactorOutletTemperatureData: Reactor_outlet_temperature_C,
      hotspotTemperatureData: Reactor_hotspot_temperature_C,
      yieldProcentData: Yield_percent,
      productFlowData: Product_flow_tonsperday,
    }
  } else {
    return {}
  }
  
};

function dispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(actions.getDataRequest()),
  };
}

export default connect(mapStateToProps, dispatchToProps)(DataDashboard);