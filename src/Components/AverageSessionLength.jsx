import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { AverageSessionLengthStyles } from './AverageSessionLengthStyles';
import { CustomTooltipStyle } from './AverageSessionLengthStyles';
import { BackgroundRedDark } from './AverageSessionLengthStyles';

const AverageSessionLength = (props) => {
  console.log(props);
  const addEndDay = props.userAverage.length + 1;

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

  const newFirstSessionLenght = (data) => {
    return (data[0].sessionLength - data[1].sessionLength) + data[0].sessionLength;
  }

  const newLastSessionLenght = (data) => {
    return (data[data.length - 1].sessionLength - data[data.length - 2].sessionLength) + data[data.length - 1].sessionLength;
  }

  const extendedData = [
    { day: "-1", sessionLength: newFirstSessionLenght(props.userAverage) },
    ...props.userAverage,
    { day: { addEndDay }, sessionLength: newLastSessionLenght(props.userAverage) },
  ];

  const mapNumericToAbbreviation = (numericDay) => {
    const abbreviations = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    return abbreviations[numericDay - 1] || '';
  };

  const customTickFormatter = (tick) => {
    return mapNumericToAbbreviation(tick);
  }

  return (
    <AverageSessionLengthStyles>
      <BackgroundRedDark />
      <p>Durée moyenne des<br />sessions</p>
      <ResponsiveContainer height='100%' width='100%'>
        <LineChart width={290} height={263} data={extendedData} >
          <defs>
            <linearGradient id="grad" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.5)" />
              <stop offset="50%" stopColor="rgba(255, 255, 255, 0.5)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="day"
            tickFormatter={customTickFormatter}
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