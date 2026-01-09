'use client'

import { Search, Bell, ChevronDown } from 'lucide-react'

export default function Header() {
  return (
    <header className="border-b border-gray-100 py-4 font-poppins w-full">
      <div className="flex items-center justify-between px-6">
        {/* Search Bar */}
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-4 pr-10 py-2.5 bg-gray-50 border-0 rounded-lg text-sm text-gray-600 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* User Dropdown */}
          <button className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="w-9 h-9 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center text-lg">
              🍔
            </div>
            <span className="text-sm font-medium text-gray-900">Delicious Burger</span>
          </button>
          <ChevronDown size={16} className="text-gray-600" />
          {/* Notification Bell */}
          <button className="relative w-10 h-10 hover:bg-gray-50 rounded-lg flex items-center justify-center transition-colors">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </div>
    </header>
  )
}
