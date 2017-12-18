var React = require('react');
var Link = require('react-router-dom').Link;
require('./Home.css');

class Home extends React.Component {
  render(){
    return (
      <div className= "homeContainer">
        <img src={require('./buckinghamFountain.jpg')} className="skyline" />
        <img src={require('./chicagoFlag.png')} className="flag" />
      </div>
    )
  }
}

module.exports = Home;