/* eslint-disable indent */
import React, { Component } from 'react';
import PT from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import moment from 'moment';
import expand__button from '../assets/images/Group.png';

import { gradeHistoryAnalytic } from '../store/gradeHistory/actions';
import { PageTitle, SearchBox } from '../components';

const TITLE = 'История оценок учителя | Аналитика Кундолук';

class GradeHistory extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      sort: '',
      grade: '',
      expandSearch: false,
      startDate: moment().subtract(1, 'M').format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD'),
    };
    this.handleInput = this.handleInput.bind(this);
    this.getGradeHistory = this.getGradeHistory.bind(this);
    this.toggleExpandSearch = this.toggleExpandSearch.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }
  static propTypes = {
    gradeHistory: PT.any,
    gradeHistoryAnalytic: PT.func,
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
    this.getGradeHistory();
  }
  toggleExpandSearch = () => {
    this.setState({
      expandSearch: !this.state.expandSearch,
    });
  };

  getGradeHistory() {
    this.props.gradeHistoryAnalytic(
      moment(
        localStorage.getItem('startDate') || this.state.startDate,
        'YYYY-MM-DD'
      ).format('DD.MM.YYYY'),
      moment(
        localStorage.getItem('endDate') || this.state.endDate,
        'YYYY-MM-DD'
      ).format('DD.MM.YYYY'),
      this.props.match.params.teacher_id
    );
  }

  handleInput = (e) => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleDateChange(e) {
    if (e.target.name === 'startDate') {
      localStorage.setItem('startDate', e.target.value);
    } else {
      localStorage.setItem('endDate', e.target.value);
    }
    this.handleInput(e);
    this.getGradeHistory();
  }

  render() {
    const { gradeHistory } = this.props;
    const { startDate, endDate, sort, searchText, expandSearch } = this.state;

    let gradeHistoryList, a;

    if (gradeHistory !== undefined && gradeHistory !== null) {
      gradeHistoryList = gradeHistory.filter((item) => {
        return item.studentTitle
          .toLowerCase()
          .includes(searchText.toLocaleLowerCase());
      });
      if (sort == 'asc') {
        gradeHistoryList = gradeHistoryList.sort((a, b) =>
          a.studentTitle.toLowerCase() > b.studentTitle.toLowerCase() ? 1 : -1
        );
      } else if (sort == 'desc') {
        gradeHistoryList = gradeHistoryList.sort((a, b) =>
          a.studentTitle.toLowerCase() < b.studentTitle.toLowerCase() ? 1 : -1
        );
      }

      a = [];
      gradeHistory.map((item) =>
        !a.includes(item.classTitle)
          ? (a.push(item.classTitle), console.log(item.classTitl))
          : console.log('This item already exists')
      );
    } else {
      gradeHistoryList = [];
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
            <div className=" content content_color">
              <div className="item">
                <div className="item-block">
                  <span className="appraisals active-tab">Оценки</span>
                </div>
                <div className="item-block">
                  <Link
                    className="attendance "
                    to={`/teachers/${this.props.match.params.teacher_id}/attendance`}
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
              </div>

              {expandSearch ? (
                <div className="toolbox__row collapsed">
                  <div className="expand-search__row">
                    <div className="expand-search__item">
                      <span className="expand-search__title">Сортировать:</span>
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

              <div className="content_header">
                <div className="content_header_left">
                  <PageTitle title="История оценок" goBack={true} />
                </div>
              </div>

              <p className="card-count__text">
                Количество оценок за выбранный период: {gradeHistoryList.length}
              </p>

              <div className="content">
                <div className="cards__block">
                  <div className="cards">
                    {gradeHistoryList.map((item, idx) => (
                      <div className="card__block" key={idx}>
                        <div className="card">
                          <div className="card__title">
                            <p className="student__weight">
                              {item.studentTitle}
                            </p>
                          </div>
                          <div className="card__text">
                            <p>{item.classTitle}</p>
                          </div>
                          <div className="card__text">
                            <p>{item.courseTitle}</p>
                          </div>
                          <div className="card__text">
                            <p>Оценка: {item.mark}</p>
                          </div>
                          <div className="card__text">
                            <p>Дата создания: {item.markDate}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gradeHistory: state.gradeHistory.gradeHistory,
  };
};

const mapDispatchToProps = {
  gradeHistoryAnalytic,
};

export default connect(mapStateToProps, mapDispatchToProps)(GradeHistory);
