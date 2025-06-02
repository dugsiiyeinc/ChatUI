import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';
import DateRangeDropdown from './DateRangeDropdown';

const chartData = {
  "Last 7 Days": {
    bar: [{ month: "July", chats: 10 }],
    pie: [
      { name: "General", value: 3 },
      { name: "Subjects", value: 5 },
      { name: "Guidance", value: 2 },
    ],
  },
  "Last 30 Days": {
    bar: [
      { month: "June", chats: 25 },
      { month: "July", chats: 30 },
    ],
    pie: [
      { name: "General", value: 10 },
      { name: "Subjects", value: 25 },
      { name: "Guidance", value: 5 },
    ],
  },
  "Last 90 Days": {
    bar: [
      { month: "May", chats: 40 },
      { month: "June", chats: 55 },
      { month: "July", chats: 60 },
    ],
    pie: [
      { name: "General", value: 25 },
      { name: "Subjects", value: 50 },
      { name: "Guidance", value: 25 },
    ],
  },
  "This Year": {
    bar: [
      { month: "April", chats: 30 },
      { month: "May", chats: 40 },
      { month: "June", chats: 60 },
      { month: "July", chats: 70 },
    ],
    pie: [
      { name: "General", value: 35 },
      { name: "Subjects", value: 45 },
      { name: "Guidance", value: 20 },
    ],
  },
};

const PIE_COLORS = ["#6366f1", "#10b981", "#f59e0b"];
const LABEL_COLORS = ["#6366f1", "#10b981", "#f59e0b"];

export default function HistoryPage() {
  const [selectedRange, setSelectedRange] = useState("This Year");

  const barData = chartData[selectedRange].bar;
  const pieData = chartData[selectedRange].pie;

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            📊 <span className="text-white">Dugsiiye Bot Chat History</span>
          </h1>
          <DateRangeDropdown selected={selectedRange} onChange={setSelectedRange} />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Bar Chart */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-md">
            <h2 className="text-lg font-semibold text-indigo-300 mb-4">Student Interaction Over Time</h2>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={barData}>
                <XAxis dataKey="month" stroke="#d1d5db" />
                <YAxis stroke="#d1d5db" />
                <Tooltip />
                <Bar dataKey="chats" fill="#818cf8" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-sm text-gray-300 mt-4">
              This chart shows how many educational chats occurred each month. A rising trend means more students are using Dugsiiye Bot.
            </p>
          </div>

          {/* Pie Chart */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-md">
            <h2 className="text-lg font-semibold text-green-400 mb-4">Category Distribution</h2>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  fill="#8884d8"
                  dataKey="value"
                  stroke="#1f2937"
                  label={({ cx, cy, midAngle, innerRadius, outerRadius, index }) => {
                    const RADIAN = Math.PI / 180;
                    const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                    const y = cy + radius * Math.sin(-midAngle * RADIAN);

                    return (
                      <text
                        x={x}
                        y={y}
                        fill={LABEL_COLORS[index % LABEL_COLORS.length]}
                        textAnchor={x > cx ? "start" : "end"}
                        dominantBaseline="central"
                        fontSize={14}
                      >
                        {pieData[index].value}
                      </text>
                    );
                  }}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <ul className="text-sm text-gray-300 mt-4 space-y-1">
              <li><span className="text-indigo-400 font-semibold">🟣 General:</span> General questions like how to use Dugsiiye or navigate the platform.</li>
              <li><span className="text-green-400 font-semibold">🟢 Subjects:</span> Curriculum-related questions asked by students.</li>
              <li><span className="text-yellow-400 font-semibold">🟠 Guidance:</span> Study tips, advice, and academic support queries.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
