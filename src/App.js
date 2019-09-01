import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from './store/actions/index';

class App extends Component {
  componentDidMount () {
      this.props.onInitIngredients();
      console.log(this.props.ings); 
  }
  render() {
    return (
      <div>123123</div>
      )
  }
}

const mapStateToProps = state => {
  return {
      ings: state.product
  };
}

const mapDispatchToProps = dispatch => {
  return {
      onInitIngredients: () => dispatch(actions.initIngredients())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);