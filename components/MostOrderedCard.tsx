'use client'

const foodItems = [
  { id: 1, name: 'Fresh Salad Bowl', price: 45000, icon: '🥗' },
  { id: 2, name: 'Chicken Noodles', price: 75000, icon: '🍜' },
  { id: 3, name: 'Smoothie Fruits', price: 45000, icon: '🥤' },
  { id: 4, name: 'Hot Chicken Wings', price: 45000, icon: '🍗' },
]

export default function MostOrderedCard() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-2">Most Ordered Food</h2>
      <p className="text-sm text-gray-400 mb-6">Adipiscing elit, sed do eiusmod tempor</p>

      <div className="space-y-4">
        {foodItems.map((item) => (
          <div key={item.id} className="flex items-center gap-4 pb-4 border-b border-gray-100 last:border-0">
            <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
              {item.icon}
            </div>
            <span className="flex-1 text-sm font-medium text-gray-700">{item.name}</span>
            <span className="text-sm font-semibold text-gray-900">
              IDR {item.price.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
