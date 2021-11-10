export default function PeopleContainer(props) {
  console.log(props)

  function handleClick(){
    // fetch
    // re-route
    props.routerInfo.history.push("/")
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
