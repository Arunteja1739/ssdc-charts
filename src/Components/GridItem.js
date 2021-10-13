import React from "react";
import { BsGripHorizontal } from 'react-icons/bs';

const GridItem = ({
    title,
    data,
    type,
    className,
    style,
    dispatch,
    root,
    children,
    chart,
    ...rest
}) => {
    const { component: Component,options } = chart;
    const width = parseInt(style.width, 10);
    const height = parseInt(style.height, 10) - 100;
    return (
        <div className={`grid-item fadeup-animation ${className}`} style={style} {...rest}>
            <div className="grid-item-header">
                <div className="drag-handle">
                    <BsGripHorizontal  size="40px" />
                </div>
            </div>
            <div className="grid-item__graph">
                <Component type={type} data={chart.data} width={width} height={height} options={options||{}} />
            </div>
            {children}
        </div>
    );
};

export default GridItem;
