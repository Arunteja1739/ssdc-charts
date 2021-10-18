import React, { useMemo } from "react";
import ResizeDetector from "react-resize-detector";
import {
  VictoryArea,
  VictoryAxis,
  VictoryChart,
  VictoryStack,
  VictoryTheme,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from "victory";

const VictoryNativeArea = (props) => {
  const {
    height,
    stackData = [],
    theme = VictoryTheme.material,
    width,
  } = props;

  return (
    <VictoryChart
      containerComponent={
        <VictoryVoronoiContainer fixLabelOverlap={true} responsive={true} />
      }
      domain={{}}
      domainPadding={0}
      fixLabelOverlap={true}
      height={height}
      theme={theme}
      width={width}
    >
      <VictoryAxis />
      <VictoryAxis dependentAxis />
      <VictoryStack>
        {stackData.map(({ id, color, data }) => {
          return (
            <VictoryArea
              key={id}
              data={data}
              animate={{
                duration: 300,
                onLoad: {
                  duration: 0,
                },
              }}
              style={{ data: { fill: color } }}
              labels={({ datum }) => `${id}: ${datum.y}`}
              labelComponent={<VictoryTooltip renderInPortal={true} />}
              interpolation="natural"
            />
          );
        })}
      </VictoryStack>
    </VictoryChart>
  );
};

const VictoryNativeAreaChart = ({
  data,
  options: { keys, ...options } = {},
}) => {
  const stackData = useMemo(
    () =>
      keys.map(
        ({ dataKey, fill }) => ({
          id: dataKey,
          color: fill,
          data: data.map((datum, index) => ({ x: index, y: datum[dataKey] })),
        }),
        []
      ),
    [data, keys]
  );

  return (
    <ResizeDetector>
      {({ height, width }) => (
        <VictoryNativeArea
          {...options}
          height={height}
          stackData={stackData}
          width={width}
        />
      )}
    </ResizeDetector>
  );
};

export default VictoryNativeAreaChart;
