import React from 'react';
import { RadarStyles } from './RadarStyles';
import { LineChart, Polygon, XAxis, YAxis, CartesianGrid } from 'recharts';


const Radar = (props) => {  
  const data = [
    { x: 0, y: 0 },
    { x: 20, y: 10 },
    { x: 40, y: 0 },
    { x: 40, y: -20 },
    { x: 20, y: -30 },
    { x: 0, y: -20 },
  ];
   return (
    <RadarStyles>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" />
        <YAxis dataKey="y" />
        <Polygon
          points={data.map((entry) => [entry.x, entry.y]).flat()}
          fill="blue"
          fillOpacity={0.5}
        />
      </LineChart>
    </RadarStyles>
  );
};
export default Radar;