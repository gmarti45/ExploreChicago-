var React = require('react');
var Link = require('react-router-dom').Link;
require('./Museums.css');

class Home extends React.Component {
  render(){
    return (
      <div className= "MuseumsContainer">
        <img src={require('./AdlerPlanetarium.jpg')} className="museumColumn"
             onClick= {() => {document.location = 'http://www.adlerplanetarium.org'}}/>
        <img src={require('./ArtInstitueOfChicago.jpg')} className="museumColumn"
             onClick= {() => {document.location = 'http://www.artic.edu/'}}/>
        <img src={require('./FieldMuseum.jpg')} className="museumColumn"
             onClick= {() => {document.location = 'https://www.fieldmuseum.org/'}}/>
        <img src={require('./MexicanArtMuseum.jpg')} className="museumColumn"
             onClick= {() => {document.location = 'http://nationalmuseumofmexicanart.org/'}}/>
        <img src={require('./MuseumOfContemporaryArt.jpg')} className="museumColumn"
             onClick= {() => {document.location = 'https://mcachicago.org/Home'}}/>
        <img src={require('./MuseumOfScienceAndIndustry.jpg')} className="museumColumn"
             onClick= {() => {document.location = 'https://www.msichicago.org/'}}/>
        <img src={require('./SheddAquarium.jpg')} className="museumColumn"
             onClick= {() => {document.location = 'https://www.sheddaquarium.org/'}}/>
      </div>
    )
  }
}

module.exports = Home;