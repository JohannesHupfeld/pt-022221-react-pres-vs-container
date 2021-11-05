import React from 'react'
import StarshipsContainer from './starships/StarshipsContainer';
import PlanetsContainer from './planets/PlanetsContainer';
import PeopleContainer from './people/PeopleContainer';

export default function Pages({page, starships, people, planets}) {
  function renderPage(){
    switch (page) {
      case "starships":
        
        return <StarshipsContainer starships={starships} />;  
      
      case "people":
      
        return <PeopleContainer people={people} />;

      case "planets":
        
        return <PlanetsContainer planets={planets} />;
    
      default:
        break;
    }
  }

  return (
    <div>
      {renderPage()}
    </div>
  )
}
