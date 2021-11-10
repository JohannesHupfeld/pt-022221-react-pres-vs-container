import {Link} from 'react-router-dom';

export default function StarshipsContainer(props) {
  console.log(props)

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
