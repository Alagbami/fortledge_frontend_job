'use client'

import { LayoutDashboard, ShoppingCart, FileText, MessageSquare, Settings, CreditCard, Users, HelpCircle } from 'lucide-react'
import { useState } from 'react'
import clsx from 'clsx'

interface NavItem {
  id: string
  label: string
  icon: React.ReactNode
  href: string
}

const menuItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} />, href: '/' },
  { id: 'food-order', label: 'Food Order', icon: <ShoppingCart size={20} />, href: '/food-order' },
  { id: 'manage-menu', label: 'Manage Menu', icon: <FileText size={20} />, href: '/manage-menu' },
  { id: 'customer-review', label: 'Customer Review', icon: <MessageSquare size={20} />, href: '/customer-review' },
]

const otherItems: NavItem[] = [
  { id: 'settings', label: 'Settings', icon: <Settings size={20} />, href: '/settings' },
  { id: 'payment', label: 'Payment', icon: <CreditCard size={20} />, href: '/payment' },
  { id: 'accounts', label: 'Accounts', icon: <Users size={20} />, href: '/accounts' },
  { id: 'help', label: 'Help', icon: <HelpCircle size={20} />, href: '/help' },
]

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('dashboard')

  return (
    <aside className="w-64 bg-sidebar h-screen fixed left-0 top-0 p-6 flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-xl">
          🍔
        </div>
        <span className="font-bold text-gray-900 tracking-wide">GOODFOOD</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col">
        {/* Menu Section */}
        <div className="mb-8">
          <p className="text-xs font-semibold text-gray-400 tracking-wider mb-3 px-4">MENU</p>
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={clsx(
                'w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all duration-200',
                activeItem === item.id
                  ? 'bg-primary-500/80 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-200/50'
              )}
            >
              <span className="flex-shrink-0">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Others Section */}
        <div>
          <p className="text-xs font-semibold text-gray-400 tracking-wider mb-3 px-4">OTHERS</p>
          {otherItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={clsx(
                'w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all duration-200',
                activeItem === item.id
                  ? 'bg-primary text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-200/50'
              )}
            >
              <span className="flex-shrink-0">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </aside>
  )
}
