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
      
      <input
        placeholder="Поиск"
        type="text"
        name="searchText"
        value={searchText}
        onChange={handleInput}
        className="toolbox__search"
        
        
      />
    );
  }
}
