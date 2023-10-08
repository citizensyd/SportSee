import React from 'react';
import { RadarStyles } from './RadarStyles';
import { RadarChart, PolarAngleAxis, PolarRadiusAxis, Radar, PolarGrid, ResponsiveContainer } from 'recharts';

/**
 * RadarUser component. Represents a radar chart that visualizes user performance metrics.
 * 
 * @param {Object} props - Props passed into the component.
 * @param {Array} props.userPerformance - Array of objects representing user performance data.
 */
const RadarUser = (props) => {

  /**
   * Custom rendering of the PolarAngleAxis labels based on payload values.
   * 
   * @param {Object} props - Props passed into the function.
   * @param {number} props.x - X-coordinate of the axis label.
   * @param {number} props.y - Y-coordinate of the axis label.
   * @param {Object} props.payload - Object containing value of the axis label.
   * @returns {JSX.Element} Custom rendered axis label.
   */
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
        <RadarChart outerRadius="65%" data={props.userPerformance} cx="50%" cy="50%">
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="subject" tick={props => renderPolarAngleAxis(props)} />
          <PolarRadiusAxis axisLine={false} angle={30} tick={false} domain={[0, 200]} />
          <Radar dataKey="user" fill="rgba(255, 1, 1, 0.70)" />
        </RadarChart>
      </ResponsiveContainer>
    </RadarStyles>
  );
};

export default RadarUser;
