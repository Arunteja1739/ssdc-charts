import React from 'react';
import Charts from '../../NivoCharts';
import GridLayout from '../../Components/GridLayout';
import layout from './layoutConfig';


class Nivo extends React.Component {
    constructor(props) {
      super(props);
      this.state = { layout };
    }
    componentDidMount(){
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
  
  export default Nivo;