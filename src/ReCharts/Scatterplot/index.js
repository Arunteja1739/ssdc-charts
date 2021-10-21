import React, { PureComponent } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer, Legend } from 'recharts';
import { COLORS } from '../Donut';

export default class Example extends PureComponent {

  render() {
    const { data, options } = this.props;
    return (
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart
          width={400}
          height={400}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
          {...options}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" {...(options?.xAxisOptions||{})} />
          <YAxis type="number" dataKey="y" {...(options?.yAxisOptions||{})} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          {data.map((scatter,id)=><Scatter name={scatter.id} data={scatter.data} fill={COLORS[id % COLORS.length]}>
            {scatter.data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[id % COLORS.length]} />
            ))}
          </Scatter>)}
        </ScatterChart>
      </ResponsiveContainer>
    );
  }
}
