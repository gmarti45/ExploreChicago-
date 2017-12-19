var React = require('react');
var NavLink = require('react-router-dom').NavLink;

function Nav(){
  return (
    <ul className="nav">
      <li>
        <NavLink exact activeClassName='active' to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to="/login">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to="/museums">
          Museums
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to="/popular">
          Popular
        </NavLink>
      </li>
    </ul>
  )
}

module.exports = Nav;