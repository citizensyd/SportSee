import React from 'react';
import { ScoreStyles, ScoreText, ScoreTitle } from './Score.styles';
import { PieChart, Pie, Cell } from 'recharts';

const Score = (props) => {

  let scoreDay = props.userObjective * 100;
  let scoreDayOpposite = 100 - scoreDay;
  const data = [
    { value: scoreDay },
    { value: scoreDayOpposite }
  ];

  return (
    <ScoreStyles>
      <ScoreTitle>Score</ScoreTitle>
      <ScoreText><span>{scoreDay}%</span><br/>de votre <br/>objectif</ScoreText>
      <PieChart width={258} height={263}>
        <Pie stroke="none" data={[{ value: 100 }]} dataKey="value" fill="#FFF" isAnimationActive={false} />
        <Pie
          fill="#FFF"
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={90}
          outerRadius={100}
          dataKey="value"
          cornerRadius={10}
          startAngle={210}
          endAngle={-150}
          stroke="none"
        >
          <Cell key="A" fill="#E60000" />
          <Cell key="B" fill="#FBFBFB" />
        </Pie>
      </PieChart>
    </ScoreStyles>
  );
};

export default Score;
