import React from 'react';
import GridItem from './GridItem';

const GridItemContainer = ({ title, type, data, children, item, chart, ...props }) => {
    return (
        <GridItem title={item.title} type={item.type} data={item.data} root={item} chart={chart} {...props}>
            {children}
        </GridItem>
    );
};



export default GridItemContainer;