import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PT from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { useRoutes } from './routes';
import ScrollToTop from './ScrollToTop';
import './App.scss';
import './Responsive.scss';

const TITLE = 'Аналитика Кундолук';

class App extends Component {
  static propTypes = {
    user: PT.object,
  };

  render() {
    const { user } = this.props;
    const routes = useRoutes(user);
    return (
      <div className="app">
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        <Router>
          <ScrollToTop>{routes}</ScrollToTop>
        </Router>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(App);
