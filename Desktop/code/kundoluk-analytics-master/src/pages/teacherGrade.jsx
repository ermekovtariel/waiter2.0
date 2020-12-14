/* eslint-disable indent */

import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import expand__button from '../assets/images/Group.png';

import { getTeachers } from '../store/teacher/actions';
import { getSchools } from '../store/schools/actions';
import { PageTitle, TeacherList, SearchBox } from '../components';

const TITLE = 'Учителя | Аналитика Кундолук';

class TeacherGrade extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      sort: 'dec',
      schools: [],
      schoolInfo: {},
      expandSearch: false,
      startDate: moment().subtract(1, 'M').format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD'),
    };

    this.handleInput = this.handleInput.bind(this);
    this.getTeachers = this.getTeachers.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.getSchoolInfo = this.getSchoolInfo.bind(this);
  }
  static propTypes = {
    getTeachers: PT.func,
    getSchools: PT.func,
    teachers: PT.any,
    schools: PT.any,
    match: PT.object,
  };

  componentDidMount() {
    if (localStorage.getItem('startDate') && localStorage.getItem('endDate')) {
      this.setState({
        startDate: localStorage.getItem('startDate'),
        endDate: localStorage.getItem('endDate'),
      });
    } else {
      localStorage.setItem('startDate', this.state.startDate);
      localStorage.setItem('endDate', this.state.endDate);
    }
    this.getTeachers();
    this.getSchoolInfo();
  }
  getSchoolInfo = async () => {
    if (moment().month() >= 7) {
      await this.props.getSchools(
        moment(`20.08.${moment().year()}`).format('DD.MM.YYYY'),
        moment().format('DD.MM.YYYY')
      );
    } else {
      await this.props.getSchools(
        moment(`20.08.${moment().subtract(1, 'y').year()}`).format(
          'DD.MM.YYYY'
        ),
        moment().format('DD.MM.YYYY')
      );
    }
    console.log('now', moment(`20.08.${moment().year()}`));
  };
  toggleExpandSearch = () => {
    this.setState({
      expandSearch: !this.state.expandSearch,
    });
  };
  handleInput = (e) => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  getTeachers() {
    this.props.getTeachers(
      moment(
        localStorage.getItem('startDate') || this.state.startDate,
        'YYYY-MM-DD'
      ).format('DD.MM.YYYY'),
      moment(
        localStorage.getItem('endDate') || this.state.endDate,
        'YYYY-MM-DD'
      ).format('DD.MM.YYYY'),
      this.props.match.params.school_id
    );
  }
  handleDateChange(e) {
    if (e.target.name === 'startDate') {
      localStorage.setItem('startDate', e.target.value);
    } else {
      localStorage.setItem('endDate', e.target.value);
    }
    this.handleInput(e);
    this.getTeachers();
  }

  render() {
    const { teachers, schools } = this.props;
    const { startDate, endDate, searchText, sort, expandSearch } = this.state;
    let schoolTitle = schools.find((item) => {
      if (item.schoolId == this.props.match.params.school_id) {
        return (
          <div className="content_text_tbl">
            <p className="content_text_name">{item.schoolName}</p>
            <div className="content_text_flex">
              <p className="content_text_city">
                {item.regionTitle}, {item.rayonTitle}
              </p>
              <p className="content_text_city_number">{item.schoolPhone}</p>
            </div>
            <p className="content_text">Показатель за год:</p>
            <p className="content_results">Oцeнки: {item.totalGradeCount}</p>
            <p className="content_results">
              Посещаемость: {item.totalAttendanceCount}
            </p>
          </div>
        );
      }
    });
    let filteredData;
    if (teachers !== undefined && teachers !== null) {
      filteredData = teachers.filter((item) => {
        return item.instructorTitle
          .toLowerCase()
          .includes(searchText.toLocaleLowerCase());
      });
      if (sort == 'asc') {
        filteredData = filteredData.sort((a, b) =>
          a.instructorTitle.toLowerCase() > b.instructorTitle.toLowerCase()
            ? 1
            : -1
        );
      } else if (sort == 'desc') {
        filteredData = filteredData.sort((a, b) =>
          a.instructorTitle.toLowerCase() < b.instructorTitle.toLowerCase()
            ? 1
            : -1
        );
      } else if (sort == 'inc') {
        filteredData = filteredData.sort((a, b) =>
          a.totalGradeCount > b.totalGradeCount ? 1 : -1
        );
      } else if (sort == 'dec') {
        filteredData = filteredData.sort((a, b) =>
          a.totalGradeCount < b.totalGradeCount ? 1 : -1
        );
      }
    } else {
      filteredData = [];
    }

    return (
      <>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        <div className="content_border">
          <div className="content_block">
            <div className="content_text_tbl">
              <p className="content_text_name">Школа 63</p>
              <div className="content_text_flex">
                <p className="content_text_city">
                  Баткенская область, Кадамжайский район
                </p>
                <p className="content_text_city_number">+996 (771) 23 45 67</p>
              </div>
              <p className="content_text">Показатель за год:</p>
              <p className="content_results">оцeнки</p>
              <p className="content_results">посещаемость</p>
            </div>

            <div className=" content content_color">
              <div className="item">
                <div className="item-block">
                  <span className="appraisals active-tab">Оценки</span>
                </div>
                <div className="item-block">
                  <Link
                    className="attendance"
                    to={`/schools/${this.props.match.params.school_id}/attendance`}
                  >
                    Посещаемость
                  </Link>
                </div>
              </div>

              <div className="toolbox">
                <div className="toolbox__row search__row">
                  <div className="toolbox__item">
                    <SearchBox handleInput={this.handleInput} />

                    <button
                      className="expand-search"
                      onClick={this.toggleExpandSearch}
                    >
                      <img
                        className="expand__button"
                        src={expand__button}
                        alt="expand__button From"
                      />
                    </button>
                  </div>
                </div>

                {expandSearch ? (
                  <div className="toolbox__row collapsed">
                    <div className="expand-search__row">
                      <div className="expand-search__item">
                        <span className="expand-search__title">
                          Сортировать:
                        </span>
                        <select
                          className="expand-search__select"
                          name="sort"
                          onChange={this.handleInput}
                        >
                          <option value="asc">От А до Я</option>
                          <option value="desc">От Я до А</option>
                          <option value="dec" selected>
                            По убыванию
                          </option>
                          <option value="inc">По возрастанию</option>
                        </select>
                      </div>
                    </div>
                    <div className="expand-search__row">
                      <span className="expand-search__title">
                        Выбрать период времени:
                      </span>
                      <div className="expand-search__item">
                        <input
                          type="date"
                          name="startDate"
                          value={startDate}
                          onChange={this.handleDateChange}
                          className="expand-search__datepicker"
                        />

                        <input
                          type="date"
                          name="endDate"
                          value={endDate}
                          onChange={this.handleDateChange}
                          className="expand-search__datepicker"
                        />
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="content_header">
                <div className="content_header_left">
                  <PageTitle title="Оценки учителя" goBack={true} />
                </div>
              </div>
              <p className="card-count__text">
                Количество учителей: {filteredData.length}
              </p>
              <TeacherList data={filteredData} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    teachers: state.teachers.teachers,
    schools: state.schools.schools,
  };
};

const mapDispatchToProps = {
  getSchools,
  getTeachers,
};

export default connect(mapStateToProps, mapDispatchToProps)(TeacherGrade);
