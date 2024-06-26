import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartDailyBusinessStyle, CustomTooltipStyle } from './ChartDailyBusinessStyle';

/**
 * ChartDailyBusiness component. Represents a Bar Chart showcasing daily business-related metrics.
 * 
 * @param {Object} props - Props passed into the component.
 * @param {Array} props.sessionsData - Data for daily business metrics, including weight and calories burned.
 */
const ChartDailyBusiness = (props) => {

  /**
   * Custom Tooltip for the BarChart.
   *
   * @param {Object} params - Parameters passed to the tooltip.
   * @param {boolean} params.active - Indicates if the tooltip is active.
   * @param {Array} params.payload - Data being displayed by the tooltip.
   * @returns {(JSX.Element|null)} - A custom-styled tooltip element or null.
   */
  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <CustomTooltipStyle>
          <div>{`${payload[0].value}kg`}</div>
          <div>{`${payload[1].value}kCal`}</div>
        </CustomTooltipStyle>
      );
    }

    return null;
  };

  return (
    <ChartDailyBusinessStyle>
      <ResponsiveContainer height='70%' width='100%'>
        <BarChart data={props.sessionsData} >
          <CartesianGrid strokeDasharray="2 3" vertical={false} />
          <XAxis tickMargin={16} dataKey="day" tickLine={false} axisLine={false} />
          <YAxis yAxisId="kg" tickCount="4" tickLine={false} axisLine={false} orientation="right" dataKey={"kilogram"} type="number" domain={['dataMin-1', 'dataMax+1']} />
          <YAxis yAxisId="cal" hide="true" tickLine={false} axisLine={false} dataKey={"calories"} type="number" domain={[0, 'dataMax+20']} />
          <Tooltip content={<CustomTooltip />} />
          <Legend payload={[
            { value: "Poids (kg)", id: "kilogram", color: "#282D30" },
            { value: "Calories brûlées (kCal)", id: "calories", color: "#E60000" },
          ]} iconSize={8} iconType="circle" wrapperStyle={{ top: -65 }} align="right" verticalAlign="top" formatter={(value) => {
            const color = '#74798C';
            return <span style={{ color }}>{value}</span>;
          }} />
          <Bar dataKey="kilogram" fill="#282D30" yAxisId="kg" barSize={6} radius={[2, 2, 0, 0]} />
          <Bar dataKey="calories" fill="#E60000" yAxisId="cal" barSize={6} radius={[2, 2, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartDailyBusinessStyle>
  );
}

export default ChartDailyBusiness;
