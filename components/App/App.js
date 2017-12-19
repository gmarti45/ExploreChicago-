var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('../Nav/Nav');
var Home = require('../Home/Home');
var LoginPage = require('../LoginPage/LoginPage.js');
var Museums = require('../Museums/Museums.js');
require('./App.css');


class App extends React.Component {
  render() {
    return (
      <Router>
      <div className='container'>
      <Nav />
        <h1>Explore Chicago</h1>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/museums" component={Museums}/>
        <Route render={function () {
          return <error-message>Page Not Found :( </error-message>
        }} />
      </Switch>
      </div>
      </Router>
  )
  }
}

module.exports = App;