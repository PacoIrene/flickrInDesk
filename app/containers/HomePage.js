import React, { Component } from 'react';
import Home from '../components/Home';
import {connect} from 'react-redux';

import {changeHost, initialHost} from '../actions/host';
import {bindActionCreators} from 'redux';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const {dispatch} = this.props;
    const actions = bindActionCreators({initialHost}, dispatch);
    actions.initialHost();
  }
  render() {
    const {host, dispatch} = this.props;
    const actions = bindActionCreators({changeHost}, dispatch);
    return (
      <Home host={host} changeHost={actions.changeHost}/>
    );
  }
}

export default connect(
  state => ({host: state.host})
)(HomePage);
