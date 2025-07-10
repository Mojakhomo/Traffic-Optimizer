import React from 'react';
import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const congestionData = [
  { time: '08:00', value: 40 },
  { time: '09:00', value: 60 },
  { time: '10:00', value: 55 },
  { time: '11:00', value: 50 },
  { time: '12:00', value: 45 },
];

const weatherImpactData = [
  { time: '08:00', value: 30 },
  { time: '09:00', value: 45 },
  { time: '10:00', value: 50 },
  { time: '11:00', value: 55 },
  { time: '12:00', value: 40 },
];

const weeklyTraffic = [
  { name: 'Mon', value: 12 },
  { name: 'Tue', value: 18 },
  { name: 'Wed', value: 16 },
  { name: 'Thu', value: 22 },
  { name: 'Fri', value: 30 },
  { name: 'Sat', value: 24 },
  { name: 'Sun', value: 10 },
];

const forecast = [
  { day: 'Mon', congestion: 60, weather: 40 },
  { day: 'Tue', congestion: 70, weather: 55 },
  { day: 'Wed', congestion: 50, weather: 30 },
  { day: 'Thu', congestion: 80, weather: 60 },
  { day: 'Fri', congestion: 90, weather: 70 },
];

const COLORS = ['#0088FE', '#00C49F', '#FF8042', '#FF6384', '#36A2EB', '#FFCE56', '#845EC2'];

export default function PredictiveTraffic() {
  return (
    <motion.div
      className="p-6 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold mb-4">Predictive Traffic Analytics</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/10 rounded-xl p-4 shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Predicted Congestion (Next Few Hours)</h3>
          <p className="text-sm mb-2 text-gray-300">Shows the percentage of congestion expected based on historical and live data. A value of 50 means 50% of roads may be congested.</p>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={congestionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="time" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#36A2EB" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white/10 rounded-xl p-4 shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Predicted Weather Impact (Next Few Hours)</h3>
          <p className="text-sm mb-2 text-gray-300">Shows weather impact levels on traffic. A value of 60 means there's a high chance weather will affect driving conditions (rain, fog, etc).</p>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={weatherImpactData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="time" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#FF6384" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white/10 rounded-xl p-4 shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Weekly Traffic Distribution</h3>
          <p className="text-sm mb-2 text-gray-300">Visual breakdown of traffic volume by day of the week. Useful for identifying peak traffic days.</p>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={weeklyTraffic}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {weeklyTraffic.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white/10 rounded-xl p-4 shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Congestion vs Weather Forecast</h3>
          <p className="text-sm mb-2 text-gray-300">Compare traffic congestion predictions with weather risk over the coming days.</p>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={forecast}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="day" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Legend />
              <Bar dataKey="congestion" fill="#36A2EB" name="Congestion (%)" />
              <Bar dataKey="weather" fill="#FF6384" name="Weather Impact (%)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
}
