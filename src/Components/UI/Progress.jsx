export default function Progress() {
  return (
    <>
      <div className="fixed inline-flex items-center justify-center overflow-hidden rounded-full bottom-5 left-5">
        <svg className="w-10 h-10">
          <circle
            className="text-gray-300"
            strokeWidth="3"
            stroke="currentColor"
            fill="transparent"
            r="15"
            cx="20"
            cy="20"
          />
          <circle
            className="text-blue-600"
            strokeWidth="3"
            strokeDasharray="circumference"
            strokeDashoffset="87"
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="15"
            cx="20"
            cy="20"
          />
        </svg>
        <span className="absolute text-xs text-black dark:text-white">
          87<sup>%</sup>
        </span>
      </div>
    </>
  );
}
