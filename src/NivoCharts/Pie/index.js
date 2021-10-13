import React from 'react';
import { ResponsivePie } from '@nivo/pie'

const MyResponsivePie = ({ data /* see data tab */, options }) => (
    <ResponsivePie
        data={data}
        margin={{ top: 80, right: 10, bottom: 80, left: 20 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 0
                },
                id: 'dots'
            },
            {
                match: {
                    id: 1
                },
                id: 'dots'
            },
            {
                match: {
                    id: 2
                },
                id: 'dots'
            },
            {
                match: {
                    id: 3
                },
                id: 'dots'
            },
            {
                match: {
                    id: 4
                },
                id: 'lines'
            },
            {
                match: {
                    id: 5
                },
                id: 'lines'
            },
            {
                match: {
                    id: 6
                },
                id: 'lines'
            },
            {
                match: {
                    id: 7
                },
                id: 'lines'
            }
        ]}
        // legends={[
        //     {
        //         anchor: 'right',
        //         direction: 'column',
        //         justify: false,
        //         translateX: 20,
        //         translateY: 0,
        //         itemsSpacing: 8,
        //         itemWidth: 100,
        //         itemHeight: 18,
        //         itemTextColor: '#999',
        //         itemDirection: 'left-to-right',
        //         itemOpacity: 1,
        //         symbolSize: 16,
        //         symbolShape: 'circle',
        //         effects: [
        //             {
        //                 on: 'hover',
        //                 style: {
        //                     itemTextColor: '#000'
        //                 }
        //             }
        //         ]
        //     }
        // ]}
        {...options}
    />
)

export default MyResponsivePie;