import React from 'react';
import DummyActions from '../actions/DummyActions';

import { Link, IndexLink } from 'react-router'

const Edit = React.createClass({
  handleChange: function(event) {
    DummyActions.updateText(event.target.value);
  },
  render() {
    return (
      <div>
        <input type="text" value={this.props.text} onChange={this.handleChange} />
        <br />
        <IndexLink to="/">Go back</IndexLink>
      </div>
    );
  }
})

export default Edit;
