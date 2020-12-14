import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../store/auth/actions';
import { NotificationIcon, SearchIcon, UserIcon } from '../icons';

import './Header.scss';

class Header extends Component {
  static propTypes = {
    user: PT.any,
  };
  render() {
    const { user } = this.props;
    return (
      <div className="header_block">
        <div className="header">
          <div className="header_left_block">
            <div className="header_left"></div>
          </div>
          <div className="header_right_block">
            <div className="header_right">
              <div className="header_right_buttons">
                <div className="header_right_items">
                  <SearchIcon />
                </div>
                <div className="header_right_items">
                  <NotificationIcon />
                </div>
              </div>
              <div className="header_right_divider"></div>
              <div className="user_profile">
                <div className="user_profile_name">
                  <span>
                    {user.user.firstName} {user.user.lastName}
                  </span>
                </div>
                <div className="user_profile_img">
                  <UserIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
