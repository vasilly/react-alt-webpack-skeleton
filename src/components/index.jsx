import React from 'react';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        {this.props.children}
      </div>
    );
  }
})

export default Main;
