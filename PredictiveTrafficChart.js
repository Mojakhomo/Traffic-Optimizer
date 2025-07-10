// /src/components/PredictiveTraffic.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = [
  { time: '08:00', traffic: 30 },
  { time: '09:00', traffic: 80 },
  { time: '10:00', traffic: 60 },
  { time: '11:00', traffic: 40 },
  { time: '12:00', traffic: 70 },
  { time: '13:00', traffic: 90 },
];

export default function PredictiveTraffic() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Predicted Traffic (Next 6 Hours)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={mockData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Line type="monotone" dataKey="traffic" stroke="#00ffcc" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
