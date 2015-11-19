import React from 'react';
import DummyStore from '../stores/dummyStore';
import DummyActions from '../actions/dummyActions';

import { Link, IndexLink } from 'react-router'

const Edit = React.createClass({
  getInitialState() {
    return DummyStore.getState();
  },
  componentDidMount() {
    DummyStore.listen(this.onChange);
  },
  componentWillUnmount() {
    DummyStore.unlisten(this.onChange);
  },
  onChange(state) {
    this.setState(state);
  },
  handleChange: function(event) {
    DummyActions.updateText(event.target.value);
  },
  render() {
    return (
      <div>
        <IndexLink to="/">Back</IndexLink>
        <input type="text" value={this.state.text} onChange={this.handleChange} />
      </div>
    );
  }
})

export default Edit;
