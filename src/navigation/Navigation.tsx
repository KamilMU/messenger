import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import Room from '../components/Room';
import { RootState } from '../types';

function Navigation() {
  const rooms = useSelector((state: RootState) => state.rooms)

  return (
    <Switch>
      <Route
        exact path="/"
        component={Room}
      />

      <Route
        exact path={`/:id`}
        component={Room}
      />

      <Route
        path="*"
        render={() => <div>Page doesnt exist</div>}
      />
    </Switch>
  )
}

export default Navigation
