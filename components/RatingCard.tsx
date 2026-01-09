'use client'

import RatingCircle from './RatingCircle'

export default function RatingCard() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-2">Your Rating</h2>
      <p className="text-sm text-gray-400 mb-8">Lorem ipsum dolor sit amet, consectetur</p>

      <div className="relative h-[340px] flex items-center justify-center">
        {/* Hygiene - Top left, small purple circle */}
        <div className="absolute" style={{ top: '25px', left: '50px', zIndex: 3 }}>
          <RatingCircle percentage={85} label="Hygiene" color="purple" size="small" />
        </div>
        
        {/* Food Taste - Right side, large orange circle */}
        <div className="absolute" style={{ top: '0px', right: '30px', zIndex: 1 }}>
          <RatingCircle percentage={85} label="Food Taste" color="orange" size="large" />
        </div>
        
        {/* Packaging - Bottom left, small cyan circle, overlaps with Hygiene */}
        <div className="absolute" style={{ bottom: '40px', left: '30px', zIndex: 2 }}>
          <RatingCircle percentage={92} label="Packaging" color="cyan" size="small" />
        </div>
      </div>
    </div>
  )
}
