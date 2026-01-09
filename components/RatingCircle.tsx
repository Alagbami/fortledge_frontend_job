'use client'

interface RatingCircleProps {
  percentage: number
  label: string
  color: 'purple' | 'orange' | 'cyan'
  size: 'small' | 'large'
}

export default function RatingCircle({ percentage, label, color, size }: RatingCircleProps) {
  const sizeClasses = {
    small: 'w-32 h-32',
    large: 'w-48 h-48'
  }

  const colorClasses = {
    purple: 'bg-[#8B7FCC]',
    orange: 'bg-[#FF9C5A]',
    cyan: 'bg-[#5CCDDE]'
  }

  return (
    <div className={`${sizeClasses[size]} relative font-poppins`}>
      {/* Outer white border */}
      <div className="absolute inset-0 rounded-full border-[3px] border-gray-200"></div>
      
      {/* Colored circle with inner white border */}
      <div className={`absolute inset-[3px] rounded-full ${colorClasses[color]} border-[2px] border-white flex flex-col items-center justify-center`}>
        <span className={`${size === 'large' ? 'text-4xl' : 'text-2xl'} font-bold text-white leading-none`}>
          {percentage}%
        </span>
        <span className={`${size === 'large' ? 'text-sm' : 'text-xs'} text-white mt-1 font-normal`}>
          {label}
        </span>
      </div>
    </div>
  )
}