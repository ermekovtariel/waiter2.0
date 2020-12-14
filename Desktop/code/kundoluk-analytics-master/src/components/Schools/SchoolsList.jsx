/* eslint-disable indent */
import React, { Component } from 'react';
import SchoolsItem from './SchoolsItem';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

export default class SchoolsList extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    data: PT.array,
  };
  render() {
    let items = this.props.data.map((item, i) => (
      <Link to={`/schools/${item.schoolId}/grade`} key={i} className>
        <div className="home_page_card">
          <SchoolsItem
            name={item.schoolName}
            id={item.schoolId}
            regionTitle={item.regionTitle}
            rayonTitle={item.rayonTitle}
            phone={item.schoolPhone}
            grade={item.totalGradeCount}
            attendance={item.totalAttendanceCount}
          />
        </div>
      </Link>
    ));
    return (
      <div className="content">
        <div className="cards__block">
          <div className="cards">{items}</div>
        </div>
      </div>
    );
  }
}
