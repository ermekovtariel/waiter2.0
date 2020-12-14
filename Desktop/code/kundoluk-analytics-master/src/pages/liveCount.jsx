/* eslint-disable indent */
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import moment from 'moment';
import { Line } from '@reactchartjs/react-chart.js';

import { urls, API } from '../config';

const TITLE = 'Live Count | Kundoluk';

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

let gradient, ctx;
class LiveCount extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      users: [],
      dates: [],
      lastUsersCount: 0,
    };
    this.getData = this.getData.bind(this);
    this.getDataOnMount = this.getDataOnMount.bind(this);
    this.getLiveCount = this.getLiveCount.bind(this);
    this.getLiveCountOnMount = this.getLiveCountOnMount.bind(this);
  }
  componentDidMount() {
    ctx = document.getElementById('canvas').getContext('2d');
    gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, '#6A11CB');
    gradient.addColorStop(1, 'rgba(77, 88, 222, 0.5)');
    this.getDataOnMount();
    setInterval(() => this.getData(), 60000);
  }
  getDataOnMount() {
    let ago6m = moment()
        .subtract(6, 'h')
        .subtract(6, 'm')
        .format('DD.MM.YYYY HH:mm'),
      ago5m = moment()
        .subtract(6, 'h')
        .subtract(5, 'm')
        .format('DD.MM.YYYY HH:mm'),
      ago4m = moment()
        .subtract(6, 'h')
        .subtract(4, 'm')
        .format('DD.MM.YYYY HH:mm'),
      ago3m = moment()
        .subtract(6, 'h')
        .subtract(3, 'm')
        .format('DD.MM.YYYY HH:mm'),
      ago2m = moment()
        .subtract(6, 'h')
        .subtract(2, 'm')
        .format('DD.MM.YYYY HH:mm'),
      ago1m = moment()
        .subtract(6, 'h')
        .subtract(1, 'm')
        .format('DD.MM.YYYY HH:mm'),
      ago0m = moment().subtract(6, 'h').format('DD.MM.YYYY HH:mm'),
      dateLable5 = moment().subtract(5, 'm').format('DD.MM.YYYY HH:mm'),
      dateLable4 = moment().subtract(4, 'm').format('DD.MM.YYYY HH:mm'),
      dateLable3 = moment().subtract(3, 'm').format('DD.MM.YYYY HH:mm'),
      dateLable2 = moment().subtract(2, 'm').format('DD.MM.YYYY HH:mm'),
      dateLable1 = moment().subtract(1, 'm').format('DD.MM.YYYY HH:mm'),
      dateLable0 = moment().format('DD.MM.YYYY HH:mm');
    this.setState({
      dates: [
        dateLable5,
        dateLable4,
        dateLable3,
        dateLable2,
        dateLable1,
        dateLable0,
      ],
    });
    this.getLiveCountOnMount(ago6m, ago5m);
    this.getLiveCountOnMount(ago4m, ago3m);
    this.getLiveCountOnMount(ago5m, ago4m);
    this.getLiveCountOnMount(ago3m, ago2m);
    this.getLiveCountOnMount(ago2m, ago1m);
    this.getLiveCountOnMount(ago1m, ago0m);
  }
  async getLiveCountOnMount(start, end) {
    const token = localStorage.getItem('jwtToken');
    const params = {
      start,
      end,
    };
    await API(token)
      .get(urls.LIVE_COUNT, {
        params,
      })
      .then((res) => {
        console.log('res', res.data);
        this.setState({
          users: [...this.state.users, res.data],
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  async getData() {
    let dateLable5 = moment().subtract(5, 'm').format('DD.MM.YYYY HH:mm'),
      dateLable4 = moment().subtract(4, 'm').format('DD.MM.YYYY HH:mm'),
      dateLable3 = moment().subtract(3, 'm').format('DD.MM.YYYY HH:mm'),
      dateLable2 = moment().subtract(2, 'm').format('DD.MM.YYYY HH:mm'),
      dateLable1 = moment().subtract(1, 'm').format('DD.MM.YYYY HH:mm'),
      dateLable0 = moment().format('DD.MM.YYYY HH:mm'),
      ago1m = moment()
        .subtract(6, 'h')
        .subtract(1, 'm')
        .format('DD.MM.YYYY HH:mm'),
      ago0m = moment().subtract(6, 'h').format('DD.MM.YYYY HH:mm');

    await this.getLiveCount(ago1m, ago0m);
    this.setState({
      dates: [
        dateLable5,
        dateLable4,
        dateLable3,
        dateLable2,
        dateLable1,
        dateLable0,
      ],
    });
    let a = this.state.users;
    let b = a.shift();

    this.setState({
      users: [...a, this.state.lastUsersCount],
    });
  }
  async getLiveCount(start, end) {
    const token = localStorage.getItem('jwtToken');
    const params = {
      start,
      end,
    };
    await API(token)
      .get(urls.LIVE_COUNT, {
        params,
      })
      .then((res) => {
        console.log('last', res.data);
        this.setState({
          lastUsersCount: res.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  render() {
    return (
      <>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>

        {/* <div>today {data}</div> */}
        <div>{moment().format('DD.MM.YYYY ddd')}</div>
        {/* <div>today {moment().subtract(3, 'm').format('DD.MM.YYYY HH:mm')}</div> */}
        <div className="live-chart" style={{ width: '900px', height: '600px' }}>
          <Line
            id="canvas"
            data={{
              labels: this.state.dates,
              datasets: [
                {
                  label: '# of Online Users',
                  data: this.state.users,
                  pointBorderWidth: 10,
                  pointHoverRadius: 10,
                  pointHoverBorderWidth: 1,
                  pointRadius: 3,
                  // fill: false,
                  borderWidth: 2,
                  // backgroundColor: 'rgb(255, 99, 132)',
                  backgroundColor: gradient,

                  borderColor: '#FD586B',
                },
              ],
            }}
            options={options}
          />
        </div>
        {/* <div>gavasdfasf: {liveCount}</div> */}
      </>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     liveCount: state.liveCount.liveCount,
//   };
// };

// const mapDispatchToProps = {
//   getLiveCount,
// };

export default LiveCount;
// export default connect(mapStateToProps, mapDispatchToProps)(LiveCount);
