import React from "react";
import Charts from "../../Victory";
import GridLayout from "../../Components/GridLayout";
import layout from "./layoutConfig";

class VictoryCharts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { layout };
  }
  componentDidMount() {}
  render() {
    const { layout } = this.state;
    return (
      <div className="App">
        <GridLayout items={Charts} layouts={layout} />
      </div>
    );
  }
}

export default VictoryCharts;
