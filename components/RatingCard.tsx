'use client'

import RatingCircle from './RatingCircle'

export default function RatingCard() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm font-poppins">
      <h2 className="text-base font-semibold text-gray-900 mb-1">Your Rating</h2>
      <p className="text-xs text-gray-400 mb-8">Lorem ipsum dolor sit amet, consectetur</p>

      <div className="relative h-[280px] flex items-center justify-center">
        {/* Hygiene - Top left, small purple circle */}
        <div className="absolute" style={{ top: '10px', left: '10px', zIndex: 3 }}>
          <RatingCircle percentage={85} label="Hygiene" color="purple" size="small" />
        </div>
        
        {/* Food Taste - Right side, large orange circle */}
        <div className="absolute" style={{ top: '20px', right: '-10px', zIndex: 1 }}>
          <RatingCircle percentage={85} label="Food Taste" color="orange" size="large" />
        </div>
        
        {/* Packaging - Bottom left, small cyan circle, overlaps with Hygiene */}
        <div className="absolute" style={{ bottom: '10px', left: '0px', zIndex: 2 }}>
          <RatingCircle percentage={92} label="Packaging" color="cyan" size="small" />
        </div>
      </div>
    </div>
  )
}
