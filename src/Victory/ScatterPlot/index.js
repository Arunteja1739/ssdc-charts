import React from "react";
import ResizeDetector from "react-resize-detector";
import {
  VictoryAxis,
  VictoryChart,
  VictoryScatter,
  VictoryGroup,
  VictoryTheme,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from "victory";

const VictoryNativeScatter = (props) => {
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
      <VictoryAxis tickCount={Math.round((width / 100) * tickCountFactor)} tickFormat={x => `${x} kg`} />
      <VictoryAxis dependentAxis tickFormat={y => `${y} cm`} />
      <VictoryGroup>
        {stackData.map(({ id, color, data }) => {
          return (
            <VictoryScatter
              key={id}
              data={data}
              animate={{
                duration: 300,
                onLoad: {
                  duration: 0,
                },
              }}
              style={{ data: { stroke: color } }}
              labels={({ datum }) => `${id}: x: ${datum.x}, y: ${datum.y}`}
              labelComponent={<VictoryTooltip renderInPortal={true} />}
            />
          );
        })}
      </VictoryGroup>
    </VictoryChart>
  );
};

const VictoryNativeScatterChart = ({ data, options }) => (
  <ResizeDetector>
    {({ height, width }) => (
      <VictoryNativeScatter
        {...options}
        height={height}
        stackData={data}
        width={width}
      />
    )}
  </ResizeDetector>
);

export default VictoryNativeScatterChart;
