var React = require('react');
var Link = require('react-router-dom').Link;
require('./LoginPage.css');

class Home extends React.Component {
  render(){
    return (
      <div className= "loginContainer">
        <h1>Explore Chicago</h1>

        <form>
          <h2>LOGIN</h2>
          <label><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name = "userName" required/>
            <label><b>Password</b></label>
            <input type="text" placeholder="Enter Password" name = "password" required/>
              <button type="submit">Login</button>
        </form>

      </div>
    )
  }
}

module.exports = Home;