import React from 'react';
import { RadarStyles } from './RadarStyles';
import { RadarChart, PolarAngleAxis, PolarRadiusAxis, Radar, PolarGrid, ResponsiveContainer } from 'recharts';


const RadarUser = (props) => {

  let data = [];
  let newData = {};
  const userPerformanceData = props.userPerformance;

  const translations = {
    "1": "Cardio",
    "2": "Energie",
    "3": "Endurance",
    "4": "Force",
    "5": "Vitesse",
    "6": "Intensité"
  };

  for (const key in userPerformanceData) {
    newData = {
      subject: translations[parseInt(key) + 1],
      user: userPerformanceData[key].value,
      fullMark: 200
    };
    data.push(newData);
  }
  data.reverse();

  const renderPolarAngleAxis = (props) => {
    const { x, y, payload } = props;
    const margin = 5;

    let textX = 0;
    let textY = 0;

    switch (payload.value) {
      case 'Endurance':
        textX = 0;
        textY = 0;
        break;
      case 'Cardio':
      case 'Energie':
        textX = -15;
        textY = 0;
        break;
      case 'Vitesse':
      case 'Force':
        textX = 14;
        textY = 0;
        break;
      default:
        textX = 0;
        textY = -10;
    }

    return (
      <g transform={`translate(${x},${y + margin})`}>
        <text
          x={textX}
          y={textY}
          dy={5}
          textAnchor="middle"
          fill="#FFF"
          fontSize="14"
        >
          {payload.value}
        </text>
      </g>
    );
  };

  return (
    <RadarStyles>
      <ResponsiveContainer height='100%' width='100%'>
        <RadarChart outerRadius="65%" data={data} cx="50%" cy="50%">
          <PolarGrid radialLines={false} /* polarRadius={[0, 10, 20, 40, 60, 80]} */ />
          <PolarAngleAxis dataKey="subject" tick={props => renderPolarAngleAxis(props)} />
          <PolarRadiusAxis axisLine={false} angle={30} tick={false} domain={[0, 200]} />
          <Radar dataKey="user" fill="rgba(255, 1, 1, 0.70)" />
        </RadarChart>
      </ResponsiveContainer>
    </RadarStyles>
  );
};
export default RadarUser;