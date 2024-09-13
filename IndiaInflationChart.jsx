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
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          India Inflation Rate (2011-2024)
        </h1>
        <div className="bg-white shadow rounded-lg p-6">
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
          <p className="mt-4 text-sm text-gray-600 text-center">
            Data source: World Bank (2011-2023), 2024 is projected
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndiaInflationChart;
