export default function PeopleContainer(props) {
  console.log(props)
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

  // return (
    // <div>
      // {/* <h1>All People</h1> */}
      // {/* <ul> */}
        // {this.state.people.map(p => <li>{p.name}</li>)}
        // {/* {props.people.map(p => <li>{p.name}</li>)} */}
      // {/* </ul> */}
    // {/* </div> */}
  // )

  function handleClick(){
    // fetch
    // re-route
    props.routerInfo.history.push("/") // this sends us back to home page 
  }

  return (
    <div>
      <button onClick={handleClick}>Submit</button>
      <h1>All People</h1>
      <ul>
        {props.people.map(p => <li>{p.name}</li>)}
      </ul>
    </div>
  )

}
