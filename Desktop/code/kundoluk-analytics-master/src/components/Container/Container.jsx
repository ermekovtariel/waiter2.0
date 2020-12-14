import React, { Component } from 'react';
import PT from 'prop-types';

import './Container.scss';

export default class Container extends Component {
  static propTypes = {
    children: PT.any,
  };
  render() {
    return <div className="container">{this.props.children}</div>;
  }
}
