import { useState, useEffect } from 'react'
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const COLORS = ['#00C49F', '#FFBB28', '#FF8042', '#0088FE']

interface DataPoint {
  name: string
  value: number
}

export default function RealTimeCharts() {
  const [barData, setBarData] = useState<DataPoint[]>([
    { name: 'A', value: 0 },
    { name: 'B', value: 0 },
    { name: 'C', value: 0 },
    { name: 'D', value: 0 },
  ])

  const [pieData, setPieData] = useState<DataPoint[]>([
    { name: 'Category 1', value: 25 },
    { name: 'Category 2', value: 25 },
    { name: 'Category 3', value: 25 },
    { name: 'Category 4', value: 25 },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      // Update bar chart data
      setBarData(prevData =>
        prevData.map(item => ({
          ...item,
          value: Math.floor(Math.random() * 100)
        }))
      )

      // Update pie chart data
      setPieData(prevData => {
        const newData = prevData.map(item => ({
          ...item,
          value: Math.max(5, Math.floor(Math.random() * 50))
        }))
        const total = newData.reduce((sum, item) => sum + item.value, 0)
        return newData.map(item => ({
          ...item,
          value: Math.round((item.value / total) * 100)
        }))
      })
    }, 2000) // Update every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen p-8 bg-white dark:bg-transparent transition-colors duration-200">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        Real-Time Statistics
      </h1>
      <div className="grid grid-cols-1 border lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-transparent p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Bar Chart
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <XAxis 
                dataKey="name" 
                stroke="currentColor"
                className="text-gray-600 dark:text-gray-300" 
              />
              <YAxis 
                stroke="currentColor"
                className="text-gray-600 dark:text-gray-300" 
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--tooltip-bg, #fff)',
                  border: '1px solid var(--tooltip-border, #ccc)',
                  color: 'var(--tooltip-text, #333)',
                }} 
              />
              <Legend />
              <Bar dataKey="value" fill="#8884d8">
                {barData.map((_, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[index % COLORS.length]} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white dark:bg-transparent border p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Pie Chart
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => 
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {pieData.map((_, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[index % COLORS.length]} 
                  />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--tooltip-bg, #fff)',
                  border: '1px solid var(--tooltip-border, #ccc)',
                  color: 'var(--tooltip-text, #333)',
                }} 
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}