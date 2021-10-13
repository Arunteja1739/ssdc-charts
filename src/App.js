import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import routes from './router';
import './index.scss';
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  render() {
    return (
      <div className="App">
        <Switch>
          {
            routes.map((route, id) => <Route key={id} path={route.path} exact={route.exact} component={route.component} />)
          }
        </Switch>

      </div>
    );
  }
}

export default App;
