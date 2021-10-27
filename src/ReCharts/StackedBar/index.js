import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default class StackedBar extends PureComponent {

  render() {
    const { options, data } = this.props;
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          {...options}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis {...(options?.xAxisOptions || {})} />
          <YAxis {...(options?.yAxisOptions || {})} />
          <Tooltip />
          <Legend />
          {
            options?.keys?.map(key => (
              <Bar
                dataKey={key.dataKey}
                stackId={key.stackId}
                fill={key.fill}
                // label={({ x, y, stroke, value }) => <text x={x} y={y} fill={stroke} fontSize={10} textAnchor="middle">{value}</text>}
              />
            ))
          }

        </BarChart>
      </ResponsiveContainer>
    );
  }
}
