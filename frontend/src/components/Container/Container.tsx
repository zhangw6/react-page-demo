import * as React from 'react';
import {NavBar} from "../nav-bar/NavBar";

interface Props {
  children: React.ReactNode;
}


class Container extends React.Component<Props, {}> {
  public render() {
    return (
      <div className="page-Container">
        <NavBar/>
        {this.props.children}
      </div>
    );
  }
}

export default Container;
