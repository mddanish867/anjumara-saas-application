
import { useEffect, useState } from 'react'

interface Stat {
  label: string
  value: number
  suffix?: string
}

const stats: Stat[] = [
  { label: 'Total Users', value: 10000 },
  { label: 'Revenue', value: 1000000, suffix: '$' },
  { label: 'Active Projects', value: 500 },
  { label: 'Team Members', value: 50 },
]

export default function AnimatedStatistics() {
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    const duration = 2000 // Animation duration in milliseconds
    const stepTime = 20 // Update every 20ms

    const timers = stats.map((stat, index) => {
      return setInterval(() => {
        setCounts(prevCounts => {
          const newCounts = [...prevCounts]
          const step = (stat.value / (duration / stepTime))
          newCounts[index] = Math.min(newCounts[index] + step, stat.value)
          return newCounts
        })
      }, stepTime)
    })

    return () => timers.forEach(clearInterval)
  }, [])

  return (
    <div className="bg-transparent min-h-screen flex items-center justify-center">
      <div className="bg-transparent p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-50">Company Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.suffix && <span>{stat.suffix}</span>}
                {Math.round(counts[index]).toLocaleString()}
              </div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}