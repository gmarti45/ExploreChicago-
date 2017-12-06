var React = require('react');
var Link = require('react-router-dom').Link;
require('./Home.css');

class Home extends React.Component {
  render(){
    return (
      <div className= "homeContainer">
        <h1>Explore Chicago</h1>
      </div>
    )
  }
}

module.exports = Home;