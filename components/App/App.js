var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('../Nav/Nav');
var Home = require('../Home/Home');
var LoginPage = require('../LoginPage/LoginPage.js');
require('./App.css');


class App extends React.Component {
  render() {
    return (
      <Router>
      <div className='container'>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route render={function () {
          return <errorMessage>Page Not Found :( </errorMessage>
        }} />
      </Switch>
      </div>
      </Router>
  )
  }
}

module.exports = App;