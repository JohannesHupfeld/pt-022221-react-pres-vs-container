import {Link} from 'react-router-dom';

export default function StarshipsContainer(props) {
  console.log(props);
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
  // return (
    // <div>
      // {/* <h1>All Starships</h1> */}
      // {/* <ul> */}
        // {this.state.starships.map(p => <li>{s.name}</li>)}
        // {/* {props.starships.map(s => <li>{s.name}</li>)} */}
      // {/* </ul> */}
    // {/* </div> */}
  // )
  // }
  
    function handleClick(){
      console.log("click")
      props.routerInfo.history.goBack()
    }
  
    return (
      <div>
        <button onClick={handleClick}>Back</button>
        <h1>All Starships</h1>
        <ul>
          {props.starships.map(s => {
            console.log(s)
            return <li><Link to={`/starships/${s.url.split("/")[s.url.split("/").length - 2]}`}>{s.name}</Link></li>
          })
          }
        </ul>
      </div>
    )

}

