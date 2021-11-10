import React, { Component } from 'react'

export default class Starship extends Component {
  state = {
    starship: {}
  }

  componentDidMount(){
    // fetch based on id in params
    // change state to render that starship
    fetch(`https://swapi.dev/api/starships/${this.props.routerInfo.match.params.id}`)
    .then(r => r.json())
    .then(starship => this.setState({starship}))
  }

  render() {
    return (
      <div>
        {this.state.starship.name}
      </div>
    )
  }
}

// export default function Starship({routerInfo, starships}) {
//   return (
//     <div>
//       {starships.find(s => s.id === parseInt(routerInfo.match.params.id)).name}
//     </div>
//   )
// }

