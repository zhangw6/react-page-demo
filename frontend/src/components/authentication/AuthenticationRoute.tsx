import * as React from 'react';
import {shardUserStore} from "../../store/userStore";
import {Route, RouteProps} from "react-router";
import {Login} from "../login/login";

interface Props extends RouteProps {}

export class AuthenticationRoute extends React.Component<Props> {
  render() {
    if (!shardUserStore.isAuthenticated()) {
      return <Login />;
    } else {
      return <Route {...this.props} />;
    }
  }
}
