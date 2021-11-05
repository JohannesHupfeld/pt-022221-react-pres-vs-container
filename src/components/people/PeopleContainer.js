export default function PeopleContainer(props) {
  // state = {
  //   people: []
  // }

  // componentDidMount(){
  //   fetch("https://swapi.dev/api/people")
  //   .then(r => r.json())
  //   .then(data => this.setState({
  //     people: data.results
  //   }))
  // }

  return (
    <div>
      <h1>All People</h1>
      <ul>
        {props.people.map(p => <li>{p.name}</li>)}
      </ul>
    </div>
  )

}
