import React from 'react';
import { ScoreStyles, ScoreText, ScoreTitle } from './Score.styles';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Score = (props) => {

  return (
    <ScoreStyles>
      <ScoreTitle>Score</ScoreTitle>
      <ScoreText><span>{props.userObjective[0].value}%</span><br />de votre <br />objectif</ScoreText>
      <ResponsiveContainer height='100%' width='100%'>
        <PieChart>
          <Pie stroke="none" data={[{ value: 100 }]} dataKey="value" fill="#FFF" isAnimationActive={false} />
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
            <Cell key="scoreDay" fill="#E60000" />
            <Cell key="scoreDayOpposite" fill="#FBFBFB" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </ScoreStyles>
  );
};

export default Score;
