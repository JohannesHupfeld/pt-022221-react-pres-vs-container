import React from 'react'
import './App.css';
import NavBar from './components/presentational/NavBar';
import Pages from './components/Pages';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';

export default class App extends React.Component {
  // state which page I'm on
  state = {
    // page: "starships",
    planets: [],
    starships: [],
    people: []
  }

  // changePage = (page) => {
  //   this.setState({
  //     page: page
  //   })
  // }

  componentDidMount(){
    this.fetchSWAPI("people")
    this.fetchSWAPI("starships")
    this.fetchSWAPI("planets")
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
      <Router>
        <div className="App">
          <NavBar changePage={this.changePage} />
          {/* <Link to="/home">Home</Link>
          <Link to="/about">About</Link>

          <Route path="/home">
            <p>Home</p>
          </Route>
          <Route path="/about">
            <p>About</p>
          </Route> */}

          <Pages 
            people={this.state.people} 
            starships={this.state.starships}
            planets={this.state.planets}
          />
        </div>
      </Router>
    );
  }
};
