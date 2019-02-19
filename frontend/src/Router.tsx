import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import {Login} from "./components/login/login";
import { Pages } from "./components/pages/Pages";
import {AuthenticationRoute} from "./components/authentication/AuthenticationRoute";


export function Router() {
  return (
    <Switch>
      <AuthenticationRoute exact path="/pages/" component={Pages} />
      <Route path="/" component={Login} />
    </Switch>
  );
}