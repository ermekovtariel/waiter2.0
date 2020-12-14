import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PT from 'prop-types';

class ScrollToTop extends Component {
  static propTypes = {
    children: PT.any,
    location: PT.object,
  };
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return this.props.children;
  }
}
export default withRouter(ScrollToTop);
