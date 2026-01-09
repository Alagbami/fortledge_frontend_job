'use client'

import Sidebar from './Sidebar'
import Header from './Header'
import RevenueCard from './RevenueCard'
import OrderTimeCard from './OrderTimeCard'
import RatingCard from './RatingCard'
import MostOrderedCard from './MostOrderedCard'
import OrderCard from './OrderCard'
import RatingOverview from './RatingOverview'

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        {/* Header */}
        <Header />

        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>

        {/* First Row: Revenue and Order Time */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <RevenueCard />
          <OrderTimeCard />
        </div>

        {/* Second Row: Rating, Most Ordered, and Order */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <RatingCard />
          {/* <RatingOverview /> */}
          <MostOrderedCard />
          <OrderCard />
        </div>
      </main>
    </div>
  )
}
