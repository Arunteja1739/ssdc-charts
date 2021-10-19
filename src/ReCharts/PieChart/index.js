import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { COLORS, renderActiveShape } from '../Donut';

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, fill, label, payload }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
        <text cx={cx} cy={cy} fill={payload.fill} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${label} ${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export default class PieChartComp extends PureComponent {
    state = {
        activeIndex: 0,
    };

    onPieEnter = (_, index) => {
        if (typeof index === 'number') {
            this.setState({
                activeIndex: index,
            });
        }
    };

    render() {
        const { data, options } = this.props;
        return (
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={"100%"} height={'100%'} onMouseEnter={this.onPieEnter}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({label,percent})=>`${label} (${(percent * 100).toFixed(0)}%)`}
                        outerRadius={80}
                        cornerRadius={3}
                        paddingAngle={0.7}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="value"
                        activeShape={renderActiveShape}
                        onMouseEnter={this.onPieEnter}
                        {...options}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        );
    }
}
