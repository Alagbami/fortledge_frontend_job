import clsx from "clsx";

type RatingProps = {
  size: number;
  color: string;
  percent: string;
  label: string;
  className?: string;
};

function RatingCircle({
  size,
  color,
  percent,
  label,
  className,
}: RatingProps) {
  const strokeSize = size + 10;

  return (
    <div
      className={clsx("relative flex items-center justify-center", className)}
      style={{ width: strokeSize, height: strokeSize }}
    >
      {/* Decorative arc (NOT progress) */}
      <svg
        width={strokeSize}
        height={strokeSize}
        className="absolute inset-0"
      >
        <circle
          cx={strokeSize / 2}
          cy={strokeSize / 2}
          r={strokeSize / 2 - 2}
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="55 260"
          transform={`rotate(-40 ${strokeSize / 2} ${strokeSize / 2})`}
        />
      </svg>

      {/* Solid circle */}
      <div
        className="flex flex-col items-center justify-center rounded-full text-white"
        style={{
          width: size,
          height: size,
          backgroundColor: color,
        }}
      >
        <span
          className={clsx(
            size >= 170 ? "text-[40px]" : "text-[26px]",
            "font-medium leading-none"
          )}
        >
          {percent}
        </span>
        <span className="mt-1 text-sm font-normal opacity-90">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function RatingOverview() {
  return (
    <div className="w-full max-w-md">
      {/* Title */}
      <h3 className="text-lg font-medium text-gray-900">
        Your Rating
      </h3>
      <p className="mt-1 text-sm text-gray-400">
        Lorem ipsum dolor sit amet, consectetur
      </p>

      {/* Ratings */}
      <div className="relative mt-10 h-[260px]">
        {/* Hygiene */}
        <RatingCircle
          size={120}
          color="#7C7AE6"
          percent="85%"
          label="Hygiene"
          className="absolute left-[70px] top-0 z-20"
        />

        {/* Packaging */}
        <RatingCircle
          size={140}
          color="#39C6E6"
          percent="92%"
          label="Packaging"
          className="absolute left-2 bottom-0 z-10"
        />

        {/* Food Taste */}
        <RatingCircle
          size={180}
          color="#FFAE42"
          percent="85%"
          label="Food Taste"
          className="absolute right-0 bottom-6 z-30"
        />
      </div>
    </div>
  );
}
