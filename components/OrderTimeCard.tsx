'use client'

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Afternoon', value: 40, color: '#5a67d8' },
  { name: 'Evening', value: 32, color: '#918ef4' },
  { name: 'Morning', value: 28, color: '#c8c4f0' },
]

export default function OrderTimeCard() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Order Time</h2>
        <button className="text-sm font-medium text-primary hover:underline">
          View Report
        </button>
      </div>

      <p className="text-sm text-gray-400 mb-6">From 1-6 Dec, 2020</p>

      {/* Chart with Tooltip */}
      <div className="relative flex items-center justify-center mb-8">
        <div className="w-72 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={90}
                outerRadius={130}
                paddingAngle={0}
                dataKey="value"
                startAngle={90}
                endAngle={450}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        {/* Tooltip positioned at top */}
        <div className="absolute top-8 right-0 bg-[#2d3250] text-white rounded-lg px-5 py-3.5 text-left shadow-xl">
          <div className="text-sm font-semibold mb-0.5">Afternoon</div>
          <div className="text-xs text-gray-400 mb-2">1pm - 4pm</div>
          <div className="text-xl font-bold">1.890 orders</div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between text-sm px-2">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#5a67d8]"></div>
          <span className="text-gray-600 text-xs">Afternoon</span>
          <span className="font-semibold text-gray-900 ml-1">40%</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#918ef4]"></div>
          <span className="text-gray-600 text-xs">Evening</span>
          <span className="font-semibold text-gray-900 ml-1">32%</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#c8c4f0]"></div>
          <span className="text-gray-600 text-xs">Morning</span>
          <span className="font-semibold text-gray-900 ml-1">28%</span>
        </div>
      </div>
    </div>
  )
}
