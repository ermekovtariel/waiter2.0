/* eslint-disable indent */

import React, { Component } from 'react';
import PT from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import { Helmet } from 'react-helmet';
import expand__button from '../assets/images/Group.png';

import { getTeachers } from '../store/teacher/actions';
import { PageTitle, TeacherList, SearchBox } from '../components';

const TITLE = 'Учителя | Аналитика Кундолук';

class School extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      sort: 'dec',
      expandSearch: false,
      startDate: moment().subtract(1, 'M').format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD'),
    };

    this.handleInput = this.handleInput.bind(this);
    this.getTeachers = this.getTeachers.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.toggleExpandSearch = this.toggleExpandSearch.bind(this);
  }
  static propTypes = {
    getTeachers: PT.func,
    teachers: PT.any,
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
  }

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
    const { teachers } = this.props;
    const { startDate, endDate, searchText, sort, expandSearch } = this.state;

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
          a.totalAttendanceCount > b.totalAttendanceCount ? 1 : -1
        );
      } else if (sort == 'dec') {
        filteredData = filteredData.sort((a, b) =>
          a.totalAttendanceCount < b.totalAttendanceCount ? 1 : -1
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
              <p className="content_text_name">алибаев жанылмырза</p>
              <p className="content_text">Показатель за год:</p>
              <p className="content_results">оцeнки</p>
              <p className="content_results">посещаемость</p>
            </div>
            <div className="content content_color">
              <div className="item">
                <div className="item-block">
                  <Link
                    className="appraisals"
                    to={`/schools/${this.props.match.params.school_id}/grade`}
                  >
                    Оценки
                  </Link>
                </div>
                <div className="item-block">
                  <span className="attendance active-tab">Посещаемость</span>
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
                          <option className="sort_border" value="asc">
                            От А до Я
                          </option>
                          <option className="sort_border" value="desc">
                            От Я до А
                          </option>
                          <option className="sort_border" value="dec" selected>
                            По убыванию
                          </option>
                          <option className="sort_border" value="inc">
                            По возрастанию
                          </option>
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
                  <PageTitle title="Посещаемость учителя" goBack={true} />
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
  };
};

const mapDispatchToProps = {
  getTeachers,
};

export default connect(mapStateToProps, mapDispatchToProps)(School);
