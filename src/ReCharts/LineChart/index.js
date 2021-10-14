import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



export default class LineChartComponent extends PureComponent {
    componentDidMount() {
        console.log({options:this.props.options})
    }
  render() {
    const {options,data} = this.props;
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis {...(options?.xAxisOptions||{})} />
          <YAxis  {...(options?.yAxisOptions||{})} />
          <Tooltip />
          <Legend />
          {
              data?.map((line,id)=>(
                <Line key={id} type="monotone" data={line.data} dataKey={"y"} name={line.id} stroke={line.color} strokeWidth={2} activeDot={{ r: 8 }} />
              ))
          }
        </LineChart>
      </ResponsiveContainer>
    );
  }
}