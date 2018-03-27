import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actions } from '../../reducers/componentA/action'

class DataDashboard extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }
  render() {
    const { componentA } = this.props;
    
    if (!componentA) {
      return false
    }
    return (
      <div>
        
      </div>
    );
  }
}

DataDashboard.propTypes = {
  fetchData: PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
  componentA: state.componentA,
  componentB: state.componentB,
  coolantTemperature: state.coolantTemperature,
  hotspotTemperature: state.hotspotTemperature,
  outletTemperature: state.outletTemperature,
  productFlow: state.productFlow,
  yieldProcent: state.yieldprocent,
});

function dispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(actions.getDataRequest()),
  };
}

export default connect(mapStateToProps, dispatchToProps)(DataDashboard);