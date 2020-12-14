import React, { Component } from 'react';
import PT from 'prop-types';

import { connect } from 'react-redux';
import { logout } from '../../store/auth/actions';
import Logo from '../../assets/images/Logo.png';
import { NavLink, Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.scss';
import { BurgerIcon, NavLeftIcon, ExitIcon } from '../icons';
import { Header } from '../';

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      sidebar: false,
    };
    this.showSidebar = this.showSidebar.bind(this);
  }

  static propTypes = {
    logout: PT.func,
  };
  showSidebar = () => this.setState({ sidebar: !this.state.sidebar });

  render() {
    const { sidebar } = this.state;
    const { logout } = this.props;

    return (
      <div>
        <div className="navbar relative">
          <Link to="#" onClick={this.showSidebar} className="menu-bars">
            <BurgerIcon />
          </Link>
          {/* <Header /> */}
        </div>
        <nav
          className={sidebar ? 'nav-menu active' : 'nav-menu'}
          onClick={this.showSidebar}
        >
          <div className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <div className="menu-bars_items">
              <NavLeftIcon />
              </div>
            </Link>
          </div>
          <ul className="nav-menu-items">
            <div className="nav-menu-logo">
              <img src={Logo} alt="logo" />
            </div>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <NavLink activeClassName="is-active" to={item.path} exact>
                    <img src={item.icon} />
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
            <li className="nav-text nav-text_back">
              <NavLink to="/" onClick={logout}>
                <ExitIcon />
                <span>Выйти</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
