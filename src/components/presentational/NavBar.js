// export default function NavBar({changePage}) {
  // return (
    // <div>
      // {/* <button onClick={() => changePage("starships")}>Starships</button> */}
      // {/* <button onClick={() => changePage("planets")}>Planets</button> */}
      // {/* <button onClick={() => changePage("people")}>People</button> */}
    // {/* </div> */}
  // )
// }

import {NavLink} from 'react-router-dom';

export default function NavBar() {
  function isSelected(isActive){
    return isActive ? "selected" : ""
  }

  return (
    <div>
      <NavLink 
        to="/starships"
        className={isSelected}
      >
        Starships
      </NavLink>
      <NavLink 
        to="/planets"
        className={isSelected}
      >
        Planets
      </NavLink>
      <NavLink 
        to="/people"
        className={isSelected}
      >
        People
      </NavLink>
    </div>
  )
}