import React from 'react'
import StarshipsContainer from './starships/StarshipsContainer';
import PlanetsContainer from './planets/PlanetsContainer';
import PeopleContainer from './people/PeopleContainer';
import Starship from './starships/Starship';
import {
  Switch,
  Route
} from 'react-router-dom';

export default function Pages({starships, people, planets}) {
  // function renderPage(){
  //   switch (page) {
  //     case "starships":
        
  //       return <StarshipsContainer starships={starships} />;  
      
  //     case "people":
      
  //       return <PeopleContainer people={people} />;

  //     case "planets":
        
  //       return <PlanetsContainer planets={planets} />;
    
  //     default:
  //       break;
  //   }
  // }

  return (

      <Switch>
        <Route 
          exact path="/planets"
          component={routerProps => <PlanetsContainer planets={planets} routerInfo={routerProps} />}
        />
        <Route 
          exact path="/starships" 
          component={routerProps => <StarshipsContainer starships={starships} routerInfo={routerProps} />} 
        />
        <Route 
          exact path="/people"
          render={routerProps => <PeopleContainer people={people} routerInfo={routerProps}/>}
        />
        <Route 
          exact path="/starships/:id" 
          component={routerProps => <Starship routerInfo={routerProps} starships={starships} />} 
        />
      </Switch>
  )
}
