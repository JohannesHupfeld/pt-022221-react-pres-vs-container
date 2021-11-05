export default function StarshipsContainer(props) {

  // state = {
  //   starships: []
  // }

  // componentDidMount(){
  //   // fetch
  //   fetch("https://swapi.dev/api/starships")
  //   .then(r => r.json())
  //   .then(data => this.setState({
  //     starships: data.results
  //   }))
  // }

  // render() {
    return (
      <div>
        <h1>All Starships</h1>
        <ul>
          {props.starships.map(s => <li>{s.name}</li>)}
        </ul>
      </div>
    )
  // }
}
