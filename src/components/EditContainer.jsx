import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import DummyStore from '../stores/DummyStore';
import Edit from './Edit';

const EditContainer = connectToStores({
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
    return <Edit text={this.props.text} />
  }
}))

export default EditContainer;
