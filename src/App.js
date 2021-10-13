import React from 'react';
import Charts from './Charts';
import GridLayout from './Components/GridLayout';
import layout from './layoutConfig';
import './App.css';
import './index.scss';
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { layout };
  }
  render() {
    const {layout} = this.state;
    return (
      <div className="App">
         <GridLayout items={Charts} layouts={layout} />
      </div>                    
    );
  }
}

export default App;
