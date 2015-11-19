import React from 'react';
import { Link } from 'react-router'

const Home = React.createClass({
  render() {
    return (
      <div>
        <strong>Text:</strong> {this.props.text}
        <br/>
        <Link to="edit">Click here to change text</Link>
      </div>
    );
  }
})

export default Home;
