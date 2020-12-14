import React, { Component } from 'react';

import PT from 'prop-types';

export default class SearchBox extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    searchText: PT.string,
    handleInput: PT.func,
  };
  render() {
    const { searchText, handleInput } = this.props;
    return (
      <div>
        <input
          type="text"
          name="searchText"
          value={searchText}
          onChange={handleInput}
        />
      </div>
    );
  }
}
