import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ComponentA extends Component {
  render() {
    const { data } = this.props;
    return (
      <div />
    );
  }
}

ComponentA.propTypes = {
  data: PropTypes.object.isRequired
}

export default ComponentA;
