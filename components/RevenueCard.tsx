'use client'

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import { TrendingUp } from 'lucide-react'

const data = [
  { day: '01', lastSixDays: 450, lastWeek: 380 },
  { day: '02', lastSixDays: 520, lastWeek: 490 },
  { day: '03', lastSixDays: 600, lastWeek: 520 },
  { day: '04', lastSixDays: 480, lastWeek: 450 },
  { day: '05', lastSixDays: 700, lastWeek: 620 },
  { day: '06', lastSixDays: 850, lastWeek: 750 },
  { day: '07', lastSixDays: 780, lastWeek: 680 },
  { day: '08', lastSixDays: 920, lastWeek: 800 },
  { day: '09', lastSixDays: 650, lastWeek: 580 },
  { day: '10', lastSixDays: 880, lastWeek: 750 },
  { day: '11', lastSixDays: 750, lastWeek: 680 },
  { day: '12', lastSixDays: 950, lastWeek: 820 },
]

export default function RevenueCard() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Revenue</h2>
        <button className="text-sm font-medium text-primary hover:underline">
          View Report
        </button>
      </div>

      {/* Stats */}
      <div className="mb-6">
        <div className="text-3xl font-bold text-gray-900 mb-2">IDR 7.852.000</div>
        <div className="flex items-center gap-1 text-sm text-success mb-1">
          <TrendingUp size={16} />
          <span className="font-medium">2.1% vs last week</span>
        </div>
        <p className="text-sm text-gray-400">Sales from 1-12 Dec, 2020</p>
      </div>

      {/* Chart */}
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={2} barCategoryGap="20%">
            <XAxis 
              dataKey="day" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9ca3af', fontSize: 11 }}
            />
            <YAxis hide />
            <Tooltip 
              cursor={false}
              contentStyle={{
                backgroundColor: '#1e293b',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                fontSize: '12px',
              }}
              formatter={(value: number) => [`IDR ${value}.000`]}
            />
            <Legend 
              verticalAlign="bottom"
              height={36}
              iconType="circle"
              iconSize={8}
              wrapperStyle={{
                paddingTop: '20px',
                fontSize: '12px',
              }}
              formatter={(value) => <span className="text-gray-600 text-xs">{value}</span>}
            />
            <Bar 
              dataKey="lastSixDays" 
              name="Last 6 days"
              fill="#6366f1" 
              radius={[4, 4, 0, 0]}
              maxBarSize={12}
            />
            <Bar 
              dataKey="lastWeek" 
              name="Last Week"
              fill="#d1d5db" 
              radius={[4, 4, 0, 0]}
              maxBarSize={12}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
