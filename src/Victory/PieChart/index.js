import React from "react";
import ResizeDetector from "react-resize-detector";
import {
  VictoryPie,
  VictoryTheme,
  VictoryContainer as VictoryVoronoiContainer,
} from "victory";

const VictoryNativePie = (props) => {
  const {
    data = [],
    height,
    innerRadius,
    radius,
    theme = VictoryTheme.material,
    width,
    x,
    y,
  } = props;

  return (
    <VictoryPie
      animate={{
        duration: 300,
        onLoad: {
          duration: 0,
        },
      }}
      containerComponent={
        <VictoryVoronoiContainer fixLabelOverlap={true} responsive={true} />
      }
      colorScale={data.map((datum) => datum.color)}
      cornerRadius={4}
      data={data}
      fixLabelOverlap={true}
      height={height}
      innerRadius={innerRadius}
      // labelComponent={<VictoryTooltip renderInPortal={false} />}
      labels={({ datum }) => `${datum.label}: ${datum.value}`}
      padAngle={1}
      radius={radius}
      // sortKey="value"
      // sortOrder="descending"
      theme={theme}
      width={width}
      x={x}
      y={y}
    />
  );
};

const VictoryNativePieChart = ({ data, options }) => (
  <ResizeDetector>
    {({ height, width }) => (
      <VictoryNativePie
        {...options}
        data={data}
        height={height}
        width={width}
      />
    )}
  </ResizeDetector>
);

export default VictoryNativePieChart;
