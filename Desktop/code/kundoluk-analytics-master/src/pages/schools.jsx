/* eslint-disable indent */
import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { Helmet } from 'react-helmet';
import expand__button from '../assets/images/Group.png';

import { getSchools } from '../store/schools/actions';
import { getRegions } from '../store/region/actions';
import { getRayons } from '../store/rayon/actions';
import { PageTitle, SchoolsList, SearchBox } from '../components';

const TITLE = 'Школы | Аналитика Кундолук';

class Schools extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      selectRegion: '',
      selectRegionId: 0,
      selectRayon: '',
      expandSearch: false,
      sort: 'dec',
      startDate: moment().subtract(1, 'M').format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD'),
    };
    this.handleInput = this.handleInput.bind(this);
    this.getSchools = this.getSchools.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.toggleExpandSearch = this.toggleExpandSearch.bind(this);
  }
  static propTypes = {
    getSchools: PT.func,
    getRegions: PT.func,
    getRayons: PT.func,
    schools: PT.any,
    regions: PT.any,
    rayons: PT.any,
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
    this.getSchools();
    this.props.getRegions();
    this.props.getRayons();
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
  handleSelect = (e) => {
    this.handleInput(e);
    if (e.target.name == 'selectRegion') {
      console.log(e.target);
      console.log(e.target.data);
      this.setState({
        selectRegionId: e.target.dataregionid,
      });
    }
  };
  getSchools() {
    this.props.getSchools(
      moment(
        localStorage.getItem('startDate') || this.state.startDate,
        'YYYY-MM-DD'
      ).format('DD.MM.YYYY'),
      moment(
        localStorage.getItem('endDate') || this.state.endDate,
        'YYYY-MM-DD'
      ).format('DD.MM.YYYY')
    );
  }
  handleDateChange(e) {
    if (e.target.name === 'startDate') {
      localStorage.setItem('startDate', e.target.value);
    } else {
      localStorage.setItem('endDate', e.target.value);
    }
    this.handleInput(e);
    this.getSchools();
  }

  render() {
    const { schools, regions, rayons } = this.props;
    const {
      startDate,
      endDate,
      searchText,
      selectRegion,
      selectRayon,
      selectedRegionId,
      sort,
      expandSearch,
    } = this.state;

    let filteredData,
      optionRegion,
      optionRayon,
      filteredRegions,
      filteredRayons;
    if (
      schools !== undefined &&
      regions !== undefined &&
      rayons !== undefined
    ) {
      if (selectedRegionId) {
        rayons.filter((item) => {
          return item.regionId == selectedRegionId;
        });
      }
      filteredRayons = rayons.sort((a, b) =>
        a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
      );
      filteredRegions = regions.sort((a, b) =>
        a.selectorTitle.toLowerCase() > b.selectorTitle.toLowerCase() ? 1 : -1
      );
      optionRegion = Array.from(filteredRegions).map((item, i) => {
        return (
          <option value={item.selectorTitle} dataRegionId={item.id} key={i}>
            {item.selectorTitle}
          </option>
        );
      });

      optionRayon = Array.from(filteredRayons).map((item, i) => {
        return (
          <option value={item.title} key={i}>
            {item.title}
          </option>
        );
      });
      filteredData = schools
        .filter((item) => {
          return item.schoolName
            .toLowerCase()
            .includes(searchText.toLocaleLowerCase());
        })
        .filter((item) => {
          return selectRegion ? item.regionTitle === selectRegion : item;
        })
        .filter((item) => {
          return selectRayon ? item.rayonTitle === selectRayon : item;
        });

      if (sort == 'asc') {
        filteredData = filteredData.sort((a, b) =>
          a.schoolName.toLowerCase() > b.schoolName.toLowerCase() ? 1 : -1
        );
      } else if (sort == 'desc') {
        filteredData = filteredData.sort((a, b) =>
          a.schoolName.toLowerCase() < b.schoolName.toLowerCase() ? 1 : -1
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
      optionRegion = [];
      optionRayon = [];
    }
    return (
      <>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        <div className="content_block">
          <div className="content_padding">
            <div className="content_header">
              <div className="school__page">
                <PageTitle title="Школы" />
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
                      alt="expand button"
                    />
                  </button>
                </div>
              </div>
              {expandSearch ? (
                <div className="toolbox__row collapsed">
                  <div className="expand-search__row">
                    <p className="expand-search__title">Сортировать:</p>
                    <div className="expand-search__item">
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
                    <p className="expand-search__title">
                      Выбрать период времени:
                    </p>
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
              <div className="toolbox__row toolbox__select">
                <div className="toolbox__item">
                  <select
                    name="selectRegion"
                    id="selectRegion"
                    className="space__select"
                    onChange={this.handleSelect}
                  >
                    <option value="" dataRegionId={0} disabled selected>
                      Область
                    </option>
                    <option value="">Все</option>
                    {optionRegion}
                  </select>

                  <select
                    name="selectRayon"
                    id="selectRayon"
                    className="space__select"
                    onChange={this.handleSelect}
                  >
                    <option value="" disabled selected>
                      Район
                    </option>
                    <option value="">Все</option>
                    {optionRayon}
                  </select>
                </div>
              </div>
            </div>
            <p className="card-count__text">
              Количество школ: {filteredData.length}
            </p>
            <SchoolsList data={filteredData} />
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    schools: state.schools.schools,
    regions: state.regions.regions,
    rayons: state.rayons.rayons,
  };
};

const mapDispatchToProps = {
  getSchools,
  getRegions,
  getRayons,
};

export default connect(mapStateToProps, mapDispatchToProps)(Schools);
