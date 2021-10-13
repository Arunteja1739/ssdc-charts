// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/stream
import React from 'react';
import { ResponsiveStream } from '@nivo/stream'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveStream = ({ data /* see data tab */ }) => (
    <ResponsiveStream
        data={data}
        keys={[
            "folderShare / email",
            "folderShare / undefined",
            "manual / email",
            "manual / undefined",
            "signup / email",
            "signup / google",
            "signup / undefined",
            "useTemplate / email",
            "useTemplate / google",
            "useTemplate / undefined",
            "workbookLinkShare / email",
            "workbookLinkShare / google",
            "workbookLinkShare / undefined",
            "workbookShare / email",
            "workbookShare / undefined"
        ]}
        margin={{ top: 50, right: 10, bottom: 50, left: 60 }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 45,
        }}
        axisLeft={{ orient: 'left', tickSize: 5, tickPadding: 5, tickRotation: 0 }}
        offsetType="none"
        colors={{ scheme: 'nivo' }}
        fillOpacity={0.85}
        borderColor={{ theme: 'background' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#2c998f',
                size: 4,
                padding: 2,
                stagger: true
            },
            {
                id: 'squares',
                type: 'patternSquares',
                background: 'inherit',
                color: '#e4c912',
                size: 6,
                padding: 2,
                stagger: true
            }
        ]}
        fill={[
            {
                match: {
                    id: 'Paul'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'Marcel'
                },
                id: 'squares'
            }
        ]}
        dotSize={8}
        dotColor={{ from: 'color' }}
        dotBorderWidth={2}
        dotBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.7 ] ] }}
        // legends={[
        //     {
        //         anchor: 'bottom-right',
        //         direction: 'column',
        //         translateX: 100,
        //         itemWidth: 80,
        //         itemHeight: 20,
        //         itemTextColor: '#999999',
        //         symbolSize: 12,
        //         symbolShape: 'circle',
        //         effects: [
        //             {
        //                 on: 'hover',
        //                 style: {
        //                     itemTextColor: '#000000'
        //                 }
        //             }
        //         ]
        //     }
        // ]}
    />
)


export default MyResponsiveStream;