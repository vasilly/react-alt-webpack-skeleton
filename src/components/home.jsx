import React from 'react';
import { Link } from 'react-router'
import DummyStore from '../stores/dummyStore';

const Home = React.createClass({
  getInitialState() {
    return DummyStore.getState();
  },
  render() {
    return (
      <div>
        <strong>Text:</strong> {this.state.text}
        <br/>
        <Link to="edit">Click here to change text</Link>
      </div>
    );
  }
})

export default Home;
