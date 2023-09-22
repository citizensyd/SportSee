import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { ChartDailyBusinessStyle } from './ChartDailyBusinessStyle';
import { CustomTooltipStyle } from './ChartDailyBusinessStyle';


const ChartDailyBusiness = (props) => {
  const customTickFormatter = (tick) => {
    const date = new Date(tick);
    return date.getDate();
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <CustomTooltipStyle className="custom-tooltip">
          <div>{`${payload[0].value}kg`}</div>
          <div>{`${payload[1].value}kCal`}</div>
        </CustomTooltipStyle>
      );
    }

    return null;
  };

  return (
    <ChartDailyBusinessStyle>
      <BarChart width={750} height={200} data={props.sessionsData} >
        <CartesianGrid strokeDasharray="2 3" vertical={false} />
        <XAxis tickMargin={16} dataKey="day" tickLine={false} axisLine={false} tickFormatter={customTickFormatter} />
        <YAxis yAxisId="kg" tickCount="4" tickLine={false} axisLine={false} orientation="right" dataKey={"kilogram"} type="number" domain={['dataMin-1', 'dataMax+1']} />
        <YAxis yAxisId="cal" hide="true" tickLine={false} axisLine={false} dataKey={"calories"} type="number" domain={[0, 'dataMax+20']} />
        <Tooltip content={<CustomTooltip />} />
        <Legend payload={[
          { value: "Poids (kg)", id: "kilogram", color: "#282D30" },
          { value: "Calories brûlées (kCal)", id: "calories", color: "#E60000" },
        ]} iconSize={8} iconType="circle" wrapperStyle={{ top: -70 }} align="right" verticalAlign="top" formatter={(value) => {
          const color = '#74798C';
          return <span style={{ color }}>{value}</span>;
        }} />
        <Bar dataKey="kilogram" fill="#282D30" yAxisId="kg" barSize={6} radius={[2, 2, 0, 0]} />
        <Bar dataKey="calories" fill="#E60000" yAxisId="cal" barSize={6} radius={[2, 2, 0, 0]} />
      </BarChart>
    </ChartDailyBusinessStyle>
  );
}

export default ChartDailyBusiness;
