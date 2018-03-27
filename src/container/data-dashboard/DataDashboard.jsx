import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actions } from '../../reducers/componentA/action';
import componentA from '../../component/component-a/ComponentA';

class DataDashboard extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }
  render() {
    const { componentAData } = this.props;
    
    if (!componentAData) {
      return false
    }
    return (
      <div>
        <componentA data={componentAData} />
      </div>
    );
  }
}

DataDashboard.propTypes = {
  fetchData: PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
  componentAData: state.componentA,
  componentBData: state.componentB,
  coolantTemperatureData: state.coolantTemperature,
  hotspotTemperatureData: state.hotspotTemperature,
  outletTemperatureData: state.outletTemperature,
  productFlowData: state.productFlow,
  yieldProcentData: state.yieldprocent,
});

function dispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(actions.getDataRequest()),
  };
}

export default connect(mapStateToProps, dispatchToProps)(DataDashboard);