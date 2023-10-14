import React from 'react';
import { ScoreStyles, ScoreText, ScoreTitle } from './Score.styles';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

/**
 * Score component. Represents a pie chart that visualizes user objective progress.
 * 
 * @param {Object} props - Props passed into the component.
 * @param {Array} props.userObjective - Array of objects representing user objective data.
 */
const Score = (props) => {

  return (
    <ScoreStyles>
      <ScoreTitle>Score</ScoreTitle>
      {/* Display user objective percentage */}
      <ScoreText><span>{props.userObjective[0].value}%</span><br />de votre <br />objectif</ScoreText>

      <ResponsiveContainer height='100%' width='100%'>
        <PieChart>
          {/* Background pie */}
          <Pie stroke="none" data={[{ value: 100 }]} dataKey="value" fill="#FFF" isAnimationActive={false} />

          {/* User objective progress pie */}
          <Pie
            fill="#FFF"
            data={props.userObjective}
            cx="50%"
            cy="50%"
            innerRadius="80%"
            outerRadius="90%"
            dataKey="value"
            cornerRadius={10}
            startAngle={210}
            endAngle={-150}
            stroke="none"
          >
            {/* Cell for user's progress */}
            <Cell key="scoreDay" fill="#E60000" />
            {/* Cell for the remaining portion to reach 100% */}
            <Cell key="scoreDayOpposite" fill="#FBFBFB" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </ScoreStyles>
  );
};

export default Score;
