/* eslint-disable indent */
import React, { Component } from 'react';
import PT from 'prop-types';

export default class SchoolsList extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    name: PT.string,
    regionTitle: PT.string,
    rayonTitle: PT.string,
    phone: PT.string,
    grade: PT.number,
    attendance: PT.number,
  };
  render() {
    const {
      name,
      regionTitle,
      rayonTitle,
      phone,
      grade,
      attendance,
    } = this.props;
    return (
      <div className="card__block">
        <div className="card">
          <div className="card__title">
            <p>{name}</p>
          </div>
          <div className="card__text">
            <p>{regionTitle}</p>
          </div>
          <div className="card__text">
            <p>{rayonTitle}</p>
          </div>
          <div className="card__text">
            <p>{phone}</p>
          </div>
          <div className="card__counter">
            <div className="card__text">
              <p>Оценки: {grade}</p>
            </div>

            <div className="card__text">
              <p>Посещаемость: {attendance}</p>
            </div>
            {/* <button onclick="myFunction()">Показать за год</button> */}
          </div>
        </div>
      </div>
    );
  }
}

// function myFunction() {
//   var x = document.getElementById("myDIV");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
