import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { getSchools } from '../store/schools/actions';
import { LoginForm } from '../components';
import { LogoIcon } from '../components/icons';
import './login.scss';

const TITLE = 'Авторизация | Аналитика Кундолук';

class Login extends Component {
  static propTypes = {
    getSchools: PT.func,
    schools: PT.any,
  };
  componentWillUnmount() {
    this.props.getSchools();
  }
  render() {
    return (
      <>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        <div className="login_block">
          <div className="login">
            <div className="login_logo">
              <a href="https://kundoluk.kg/">
                <LogoIcon />
              </a>
            </div>
            <LoginForm />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    schools: state.schools.schools,
  };
};

const mapDispatchToProps = {
  getSchools,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
