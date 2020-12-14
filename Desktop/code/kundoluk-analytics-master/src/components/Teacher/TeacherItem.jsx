/* eslint-disable indent */
import React, { Component } from 'react';
import PT from 'prop-types';

export default class TeacherItem extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    fullName: PT.string,
    grade: PT.number,
    attendance: PT.number,
  };
  render() {
    const { fullName, grade, attendance } = this.props;
    return (
      <div>
        <div className="card__block">
          <div className="card">
            <div className="card__title">
              <div className="student__weight">
                <p >{fullName}</p>
              </div>
            </div>

            <div className="card_grade">
              <p >Оценки: {grade}</p>
            </div>

            <div className="card_grade">

              <p>Посещаемость: {attendance}</p>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
