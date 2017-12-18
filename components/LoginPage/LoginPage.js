var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;
require('./LoginPage.css');

class LoginPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(key,event) {
    const value = event.target.value;
    this.setState({
      [key] : value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(() => ({
      username: '',
      password: ''
    }));
  }

  render(){
    return (
      <div className= "loginContainer">
        <form id="login-page" onSubmit={this.handleSubmit}>
          <h2>LOGIN</h2>
          <label><b>Username</b></label>
          <input
            id = "username"
            type="text"
            placeholder="Enter Username"
            value = {this.state.username}
            onChange ={(event) => this.handleChange('username', event)}
            required/>
            <label><b>Password</b></label>
            <input
              id = "password"
              type="text"
              placeholder="Enter Password"
              value = {this.state.password}
              onChange ={(event) => this.handleChange('password', event)}
              required/>
              <button
                type="submit"
              >
                Login</button>
        </form>

      </div>
    )
  }
}

module.exports = LoginPage;