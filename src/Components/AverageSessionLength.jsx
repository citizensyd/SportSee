import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { AverageSessionLengthStyles } from './AverageSessionLengthStyles';
import { CustomTooltipStyle } from './AverageSessionLengthStyles';
import { BackgroundRedDark } from './AverageSessionLengthStyles';

const AverageSessionLength = (props) => {

  const CustomTooltip = ({ active, payload }) => {

    if (active && payload && payload.length) {
      return (
        <CustomTooltipStyle>
          <div>{`${payload[0].value} min`} </div>
        </CustomTooltipStyle>
      );
    }

    return null;
  };


  return (
    <AverageSessionLengthStyles>
      <BackgroundRedDark />
      <p>Durée moyenne des<br />sessions</p>
      <ResponsiveContainer height='100%' width='100%'>
        <LineChart width={290} height={263} data={props.userAverage} >
          <defs>
            <linearGradient id="grad" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.5)" />
              <stop offset="50%" stopColor="rgba(255, 255, 255, 0.5)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="day"
            tickLine={false}
            tick={{ fill: 'white', opacity: 0.5 }}
            axisLine={false}
          />
          <YAxis
            hide="true"
            dataKey={"sessionLength"}
          />
          <Tooltip
            cursor=""
            content={<CustomTooltip />}
          />
          <Line
            type="monotone"
            dot={false}
            strokeWidth="2px"
            dataKey="sessionLength"
            stroke="url(#grad)"
            activeDot={{ r: 3, stroke: "rgba(255, 255, 255, 0.5)", strokeWidth: 5, fill: "white" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </AverageSessionLengthStyles>
  );
};
export default AverageSessionLength;