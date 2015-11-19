import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import DummyStore from '../stores/DummyStore';
import Home from './Home';

const HomeContainer = connectToStores({
  getStores() {
    // this will handle the listening/unlistening for you
    return [DummyStore]
  },

  getPropsFromStores() {
    // this is the data that gets passed down as props
    return DummyStore.getState()
  }
}, React.createClass({
  render() {
    return <Home text={this.props.text} />
  }
}))

export default HomeContainer;
