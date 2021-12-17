export default function PlanetsContainer(props) {
  // state = {
  //   planets: []
  // }

  // componentDidMount(){
  //   fetch("https://swapi.dev/api/planets")
  //   .then(r => r.json())
  //   .then(data => this.setState({
  //     planets: data.results
  //   }))
  // }

  // render() {
    // return (
      // <div>
        // {/* <h1>All Planets</h1> */}
        // {/* <ul> */}
          // {this.state.planets.map(p => <li>{p.name}</li>)}
          // {/* {props.planets.map(p => <li>{p.name}</li>)}  */}
        // {/* </ul> */}
      // {/* </div> */}
    // )
  // }

  function handleClick(){ // this and the button should be in its own component possibly in presentational folder 
    console.log("click")
    props.routerInfo.history.goBack()
  }
  return (
    <div>
      <button onClick={handleClick}>Back</button> 
      <h1>All Planets</h1>
      <ul>
        {props.planets.map(p => <li>{p.name}</li>)}
      </ul>
    </div>
  )
}
