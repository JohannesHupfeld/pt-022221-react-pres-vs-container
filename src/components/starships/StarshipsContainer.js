export default function StarshipsContainer(props) {
// export default class StarshipsContainer extends Componenet 

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
        {/* {this.state.starships.map(p => <li>{s.name}</li>)} */}
        {props.starships.map(s => <li>{s.name}</li>)}
      </ul>
    </div>
  )
  // }
}
