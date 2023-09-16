import React from "react";

import ChartDailyBusiness from "./ChartDailyBusiness";
import { DailyBusinessStyle } from "./DailyBusiness.styles";

const DailyBusiness = (props) => {
    console.log(props.sessionsData);

    return (
        <DailyBusinessStyle>
            <p>Activité Quotidienne</p>
            <ChartDailyBusiness sessionsData={props.sessionsData}>
            </ChartDailyBusiness>
        </DailyBusinessStyle>
    );
};

export default DailyBusiness;