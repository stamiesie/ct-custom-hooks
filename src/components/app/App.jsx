import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Characters from './presentation/Characters';
import Detail from './presentation/Detail';
import Header from '../../header/header';

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => <Characters {...routerProps} />}
          />
          <Route
            path="/:id"
            exact
            render={(routerProps) => <Detail {...routerProps} />}
          />
        </Switch>
      </Router>
    </div>
  );
}
