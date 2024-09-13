import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { year: 2011, rate: 8.9 },
  { year: 2012, rate: 9.3 },
  { year: 2013, rate: 10.9 },
  { year: 2014, rate: 6.4 },
  { year: 2015, rate: 5.9 },
  { year: 2016, rate: 4.9 },
  { year: 2017, rate: 3.3 },
  { year: 2018, rate: 3.9 },
  { year: 2019, rate: 3.7 },
  { year: 2020, rate: 6.6 },
  { year: 2021, rate: 5.1 },
  { year: 2022, rate: 6.7 },
  { year: 2023, rate: 5.7 },
  { year: 2024, rate: 5.0 }, // Projected
];

const IndiaInflationChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="rate" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default IndiaInflationChart;
