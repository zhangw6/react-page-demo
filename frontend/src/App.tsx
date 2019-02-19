import * as React from 'react';
import './App.css';
import {Router} from "./Router";

interface States {
  activePageIndex: string;
}

class App extends React.Component<{}, States> {


  public render() {

    return (
      <div>
        <Router/>
      </div>
    );
  }
}

export default App;
