import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './component/Home.jsx';
import Enter from './component/Enter.jsx';
import store from './store';

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={Home}/> 
            <Route path='/Enter' component={Enter}/> 
          </Switch>
        </Router>
      </Provider>
    );
  }
}

render(<App/>, document.getElementById('app'));
