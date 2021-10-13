import React, { Component } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import GridItemContainer from "./GridItemContainer";


const ResponsiveGridLayout = WidthProvider(Responsive);

class GridLayout extends Component {
  handleBreakPointChange = breakpoint => {
    this?.props?.setBreakPoint?.(breakpoint);
  };

  render() {
    const { items, layouts } = this.props;
    return (
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        onBreakpointChange={this.handleBreakPointChange}
        onLayoutChange={(...props)=>console.debug(props)}
        isDraggable
        isRearrangeable
        isResizable
        draggableHandle=".drag-handle"
        breakpoints={{ lg: 1280, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
        {items.map((item,i) => <GridItemContainer key={item.type} item={item} chart={item} />)}
      </ResponsiveGridLayout>
    );
  }
}


export default GridLayout;