import React from "react";
import ResizeDetector from "react-resize-detector";
import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryStack,
  VictoryTheme,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from "victory";

const VictoryNativeLine = (props) => {
  const {
    height,
    stackData = [],
    tickCountFactor = 1,
    theme = VictoryTheme.material,
    width,
  } = props;

  return (
    <VictoryChart
      containerComponent={
        <VictoryVoronoiContainer fixLabelOverlap={true} responsive={true} />
      }
      domainPadding={0}
      fixLabelOverlap={true}
      height={height}
      theme={theme}
      width={width}
    >
      <VictoryAxis tickCount={Math.round((width / 100) * tickCountFactor)} />
      <VictoryAxis dependentAxis />
      <VictoryStack>
        {stackData.map(({ id, color, data }) => {
          return (
            <VictoryLine
              key={id}
              data={data}
              animate={{
                duration: 300,
                onLoad: {
                  duration: 0,
                },
              }}
              style={{ data: { stroke: color } }}
              labels={({ datum }) => `${id}: ${datum.y}`}
              labelComponent={<VictoryTooltip renderInPortal={true} />}
            />
          );
        })}
      </VictoryStack>
    </VictoryChart>
  );
};

const VictoryNativeLineChart = ({ data, options }) => (
  <ResizeDetector>
    {({ height, width }) => (
      <VictoryNativeLine
        {...options}
        height={height}
        stackData={data}
        width={width}
      />
    )}
  </ResizeDetector>
);

export default VictoryNativeLineChart;
