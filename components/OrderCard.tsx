'use client'

import { LineChart, Line, XAxis, ResponsiveContainer, Tooltip } from 'recharts'
import { TrendingDown } from 'lucide-react'

const data = [
	{ day: '01', current: 1800, previous: 1600 },
	{ day: '02', current: 1400, previous: 2200 },
	{ day: '03', current: 2000, previous: 2400 },
	{ day: '04', current: 2050, previous: 2100 },
	{ day: '05', current: 1650, previous: 1700 },
	{ day: '06', current: 2600, previous: 1900 },
]

export default function OrderCard() {
	return (
		<div className="bg-white rounded-xl p-6 shadow-sm font-poppins">
			{/* Header */}
			<div className="flex items-center justify-between mb-4">
				<h2 className="text-base font-semibold text-gray-900">Order</h2>
				<button className="text-sm font-medium text-indigo-500 hover:text-indigo-600">
					View Report
				</button>
			</div>

			{/* Stats */}
			<div className="mb-6">
				<div className="text-3xl font-bold text-gray-900 mb-1">2.568</div>
				<div className="flex items-center gap-1 mb-3">
					<TrendingDown size={16} className="text-red-500" strokeWidth={2} />
					<span className="text-sm font-medium text-red-500">2.1%</span>
					<span className="text-sm text-gray-500">vs last week</span>
				</div>
				<p className="text-sm text-gray-400">Sales from 1-6 Dec, 2020</p>
			</div>

			{/* Chart */}
			<div className="h-32 mb-5 -mx-2">
				<ResponsiveContainer width="100%" height="100%">
					<LineChart
						data={data}
						margin={{ top: 5, right: 10, left: 0, bottom: 0 }}
					>
						<XAxis
							dataKey="day"
							axisLine={false}
							tickLine={false}
							tick={{
								fill: '#d1d5db',
								fontSize: 11,
								fontFamily: 'Poppins',
							}}
							dy={8}
						/>
						<Tooltip
							contentStyle={{
								backgroundColor: '#1e293b',
								border: 'none',
								borderRadius: '6px',
								color: 'white',
								fontSize: '11px',
								padding: '6px 10px',
								fontFamily: 'Poppins',
							}}
							labelStyle={{
								color: '#94a3b8',
								fontFamily: 'Poppins',
							}}
						/>
						<Line
							type="monotone"
							dataKey="previous"
							stroke="#e0e0e0"
							strokeWidth={2}
							dot={false}
							activeDot={false}
						/>
						<Line
							type="monotone"
							dataKey="current"
							stroke="#6366f1"
							strokeWidth={2.5}
							dot={false}
							activeDot={{ r: 4, fill: '#6366f1', strokeWidth: 0 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>

			{/* Legend */}
			<div className="flex items-center gap-5 text-xs">
				<div className="flex items-center gap-2">
					<div className="w-2 h-2 rounded-full bg-[#6366f1]"></div>
					<span className="text-gray-500">Last 6 days</span>
				</div>
				<div className="flex items-center gap-2">
					<div className="w-2 h-2 rounded-full bg-[#e0e0e0]"></div>
					<span className="text-gray-500">Last Week</span>
				</div>
			</div>
		</div>
	)
}
