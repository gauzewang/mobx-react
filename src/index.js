import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'

const Loading = () => <div>Loading...</div>;

const Mobx = Loadable({
  loader: () => import('./mobx'),
  loading: Loading
})

const Redux = Loadable({
  loader: () => import('./redux'),
  loading: Loading
})

const MST = Loadable({
  loader: () => import('./mst'),
  loading: Loading
})

class ProjectRouter extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Mobx} />
          <Route exact path='/mobx' component={Mobx} />
          <Route exact path='/redux' component={Redux} />
          <Route exact path='/mst' component={MST} />
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(<ProjectRouter />, document.getElementById('root'))
