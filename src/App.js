import React from 'react'
import './App.css';
import NavBar from './components/presentational/NavBar';
import Pages from './components/Pages';

export default class App extends React.Component {
  // state which page I'm on
  state = {
    page: "starships",
    planets: [],
    starships: [],
    people: []
  }

  changePage = (page) => {
    this.setState({
      page: page
    })
  }

  componentDidMount(){
    this.fetchSWAPI("people")
    this.fetchSWAPI("starships")
    this.fetchSWAPI("planets")
  }

  componentDidUpdate(){
    console.log(this.state)
  }

  fetchSWAPI(arg){
    fetch(`https://swapi.dev/api/${arg}`)
    .then(r => r.json())
    .then(({results}) => this.setState({
      [arg]: results
    }))
  }

  render() {
    return (
      <div className="App">
        <NavBar changePage={this.changePage} />
        <Pages 
          page={this.state.page} 
          people={this.state.people} 
          starships={this.state.starships}
          planets={this.state.planets}
        />
      </div>
    );
  }
};
