import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Characters from './presentation/Characters';
import Detail from './presentation/Detail';

export default function App() {
  return (
    <div>
      <Router>
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
