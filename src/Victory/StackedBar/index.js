import React, { useMemo } from "react";
import ResizeDetector from "react-resize-detector";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryStack,
  VictoryTheme,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from "victory";

const VictoryNativeBar = (props) => {
  const {
    height,
    horizontal = true,
    stackData = [],
    theme = VictoryTheme.material,
    width,
  } = props;

  return (
    <VictoryChart
      containerComponent={
        <VictoryVoronoiContainer fixLabelOverlap={true} responsive={true} />
      }
      domainPadding={25}
      fixLabelOverlap={true}
      height={height}
      horizontal={horizontal}
      theme={theme}
      width={width}
    >
      <VictoryAxis />
      <VictoryAxis dependentAxis tickFormat={(x) => `$${x / 1000}k`} />
      <VictoryStack>
        {stackData.map(({ id, color, data }) => {
          return (
            <VictoryBar
              animate={{
                duration: 300,
                onLoad: {
                  duration: 0,
                },
              }}
              key={id}
              data={data}
              style={{ data: { fill: color } }}
              labels={({ datum }) => `${id}: ${datum.y}`}
              labelComponent={<VictoryTooltip renderInPortal={true} />}
            />
          );
        })}
      </VictoryStack>
    </VictoryChart>
  );
};

const VictoryNativeBarChart = ({
  data,
  options: { key, keys, ...options } = {},
}) => {
  const stackData = useMemo(
    () =>
      keys.map(
        ({ dataKey, fill }) => ({
          id: dataKey,
          color: fill,
          data: data.map((datum) => ({
            x: datum[key],
            y: datum[dataKey],
          })),
        }),
        []
      ),
    [data, key, keys]
  );

  return (
    <ResizeDetector>
      {({ height, width }) => (
        <VictoryNativeBar
          {...options}
          height={height}
          stackData={stackData}
          width={width}
        />
      )}
    </ResizeDetector>
  );
};

export default VictoryNativeBarChart;
