import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from './store/actions/index';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
      this.props.fetchPhotos();
      console.log(this.props.photos); 
  }
  render() {
    const num = this.props.photos.length

    return (
      <div>number: {num} 123</div>
      )
  }
}

const mapStateToProps = state => {
  return {
    photos: state.photos
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPhotos: () => dispatch(actions.fetchPhotos())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);