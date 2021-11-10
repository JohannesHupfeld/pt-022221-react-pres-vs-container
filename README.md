# Client Side Routing

```
window.location.href = '/path'
```

Above example will make another GET request, below will not.

```
window.history.pushState(
  {state: 'info'},
  'title of state or document title (most browsers ignore this)',
  '/new/path'
)
```

## React Router Makes This EASY! :)

```
$ yarn add react-router-dom@5
```

[Documentation](https://v5.reactrouter.com/web/guides/quick-start)

```
import React from 'react
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}

class MyComponent extends React.Component {
  // code ....

  render(){
    return(
      <Router>
        <NavBar>
        <Switch>
          <Route 
            exact path="/home" 
            render={routerProps => <Home {...routerProps} />}
          />
          <Route 
            exact path="/about" 
            render={routerProps => <About {...routerProps} />} 
          />
          <Route 
            exact path="/contact" 
            render={routerProps => <Contact {...routerProps} />} 
          />
        </Switch>
        <Footer>
      </Router>
    )
  }
}

```

## RouterProps Consists of:
- history
- match (params)
- location