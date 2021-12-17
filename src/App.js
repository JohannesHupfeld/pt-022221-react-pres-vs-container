import React from 'react'
import './App.css';
import NavBar from './components/presentational/NavBar';
import Pages from './components/Pages';
import {
  BrowserRouter as Router,
  // Link,
  // Route
} from 'react-router-dom'

 export default class App extends React.Component {
  // state which page I'm on
  state = {
    //  page: "starships",
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

  // componentDidUpdate(){
  //   console.log(this.state)
  // }

  fetchSWAPI(arg){
    fetch(`https://swapi.dev/api/${arg}`)
    .then(r => r.json())
    .then(({results}) => this.setState({ // destructured
      [arg]: results
    }))
    //.then(data => this.setState({
    //  [arg]: data.resulkts
    // }))
  }

  render() {
    return (
      // router has to be the top most component if we are using any of its functionality  
      <Router>
        <div className="App">
          <NavBar changePage={this.changePage} />
          {/* <Link to="/home">Home</Link><br></br>
          <Link to="/about">About</Link>
          
          <Route path="/home">
            <p>Home</p>
          </Route>
          <Route path="/about">
            <p>About</p>
          </Route> */}

          <Pages 
            // page={this.state.page} 
            people={this.state.people} 
            starships={this.state.starships}
            planets={this.state.planets}
          />
        </div>
      </Router>
    );
  }
};
