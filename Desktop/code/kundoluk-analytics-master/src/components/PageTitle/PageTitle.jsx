import React, { Component } from 'react';
import PT from 'prop-types';
import { withRouter } from 'react-router-dom';
import { GoBackIcon } from '../icons';
import './PageTitle.scss';

class PageTitle extends Component {
  static propTypes = {
    title: PT.string,
    goBack: PT.bool,
    history: PT.any,
  };
  render() {
    const { goBack, title } = this.props;
    return (
      <div className="page-title__block">
        <div className="page-title">
          {goBack ? (
            <button
              onClick={() => this.props.history.goBack()}
              className="page-title__go-back"
            >
              <GoBackIcon />
              <p className="page-title__text">{title}</p>
            </button>
          ) : (
            <p className="page-title__text">{title}</p>
          )}
        </div>
      </div>
    );
  }
}
export default withRouter(PageTitle);
