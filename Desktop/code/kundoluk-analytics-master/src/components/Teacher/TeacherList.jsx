/* eslint-disable indent */
import React, { Component } from 'react';
import TeacherItem from './TeacherItem';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

export default class TeacherList extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    data: PT.array,
  };
  render() {
    let items = this.props.data.map((item, i) => (
      <Link to={`/teachers/${item.instructorId}/grade`} key={i}>
        <TeacherItem
          fullName={item.instructorTitle}
          grade={item.totalGradeCount}
          attendance={item.totalAttendanceCount}
        />
      </Link>
    ));
    return (
      <div>
        <div className="content">
          <div className="cards__block">
            <div className="cards">{items}</div>
          </div>
        </div>
      </div>
    );
  }
}
