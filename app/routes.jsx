import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { getUserInfo } from './actions/users';

import AppLayout from './components/AppLayout';
import { HomePage } from './pages';
import { UserPage } from './pages';
import { UserHomePageContainer } from './containers';
import { AddPresentationPageContainer } from './containers';

/*
 * @param {Redux Store}
 * We require store as an argument here because we wish to get
 * state from the store after it has been authenticated.
 */
export default (store) => {
  const requireAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    store.dispatch(getUserInfo());
    if (!authenticated) {
      replace({
        pathname: '/',
        state: { nextPathname: nextState.location.pathname }
      });
    }
    callback();
  };

  const redirectAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    if (authenticated) {
      replace({
        pathname: '/user'
      });
    }
    callback();
  };
  return (
    <Route path="/" component={AppLayout}>
      <IndexRoute component={HomePage} onEnter={redirectAuth} />
      <Route path="user" component={UserPage} onEnter={requireAuth}>
        <IndexRoute component={UserHomePageContainer} />
        <Route path="add-presentation" component={AddPresentationPageContainer} />
      </Route>
    </Route>
  );
};
