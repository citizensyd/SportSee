import React from 'react';

import { AvRaScoContainerStyles } from './AvRaScoContainerStyles';
import AverageSessionLength from './AverageSessionLength';
import Radar from './Radar';
import Score from './Score';

const AvRaScoContainer = (props) => {

    return (
        <AvRaScoContainerStyles>
            <AverageSessionLength userAverage={props.userAverage}/>
            <Radar />
            <Score />
        </AvRaScoContainerStyles>
    );
};
export default AvRaScoContainer;
