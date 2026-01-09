'use client'

import { Search, Bell, ChevronDown } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-transparent pb-8">
      <div className="flex items-center justify-between">
        {/* Search Bar */}
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-500 transition-colors"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {/* User Dropdown */}
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="w-8 h-8 bg-gradient-to-br from-warning to-orange-500 rounded-full flex items-center justify-center text-white">
              🍔
            </div>
            <span className="text-sm font-medium text-gray-700">Delicious Burger</span>
            <ChevronDown size={16} className="text-gray-400" />
          </button>

          {/* Notification Bell */}
          <button className="relative w-11 h-11 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute top-2 right-2 w-4 h-4 bg-danger rounded-full flex items-center justify-center text-[10px] text-white font-semibold">
              2
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
