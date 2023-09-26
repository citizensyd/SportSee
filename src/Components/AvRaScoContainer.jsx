import React from 'react';

import { AvRaScoContainerStyles } from './AvRaScoContainerStyles';
import AverageSessionLength from './AverageSessionLength';
import RadarUser from './Radar';
import Score from './Score';

const AvRaScoContainer = (props) => {

    return (
        <AvRaScoContainerStyles>
            <AverageSessionLength userAverage={props.userAverage}/>                
            <RadarUser userPerformance={props.userPerformance}/>
            <Score userObjective={props.userObjective}/>
        </AvRaScoContainerStyles>
    );
};
export default AvRaScoContainer;
