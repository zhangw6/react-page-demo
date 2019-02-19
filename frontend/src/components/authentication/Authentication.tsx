import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {shardUserStore} from "../../store/userStore";

interface States {
  isLoading: boolean;
}

@(withRouter as any)
export class Authentication extends React.Component<{}, States> {

  state: States = {
    isLoading: true,
  };

  get injectedProps() {
    return this.props as RouteComponentProps<void>;
  }

  componentDidMount() {
    if (shardUserStore.isAuthenticated()) {
       this.injectedProps.history.push('pages');
    } else {
       this.injectedProps.history.push('login');
    }
    this.setState({isLoading: false});
  }


  public render() {

    const {isLoading} = this.state;

    if (isLoading) {
      return <div>Loading....please wait...</div>
    } else {
      return null
    }
  }
}

