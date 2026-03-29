export default function Logo({ size = 38 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a6cf6" />
          <stop offset="100%" stopColor="#38b2f8" />
        </linearGradient>
      </defs>
      <polygon
        points="0,80 20,0 42,50 50,30 58,50 80,0 100,80 80,80 50,20 20,80"
        fill="url(#logo-grad)"
      />
    </svg>
  )
}
