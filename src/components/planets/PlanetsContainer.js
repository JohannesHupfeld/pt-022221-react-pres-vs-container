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

  function handleClick(){
    console.log("click")
    props.routerInfo.history.goBack()
  }

  // render() {
    return (
      <div>
        <button onClick={handleClick}>Back</button>
        <h1>All Planets</h1>
        <ul>
          {props.planets.map(p => <li>{p.name}</li>)}
        </ul>
      </div>
    )
  // }
}
