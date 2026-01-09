'use client'

interface RatingCircleProps {
  percentage: number
  label: string
  color: 'purple' | 'orange' | 'cyan'
  size: 'small' | 'large'
}

export default function RatingCircle({ percentage, label, color, size }: RatingCircleProps) {
  const sizeClasses = {
    small: 'w-36 h-36',
    large: 'w-56 h-56'
  }

  const colorClasses = {
    purple: 'bg-[#8B7FCC]',
    orange: 'bg-[#FF9C5A]',
    cyan: 'bg-[#5CCDDE]'
  }

  return (
    <div className={`${sizeClasses[size]} relative`}>
      {/* Outer white border with shadow */}
      <div className="absolute inset-0 rounded-full bg-white shadow-lg"></div>
      
      {/* Colored circle with inner border */}
      <div className={`absolute inset-[6px] rounded-full ${colorClasses[color]} border-[3px] border-white/30 flex flex-col items-center justify-center shadow-inner`}>
        <span className={`${size === 'large' ? 'text-5xl' : 'text-3xl'} font-bold text-white`}>
          {percentage}%
        </span>
        <span className={`${size === 'large' ? 'text-base' : 'text-sm'} text-white mt-1`}>
          {label}
        </span>
      </div>
    </div>
  )
}