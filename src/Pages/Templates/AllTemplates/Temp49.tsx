import { useState, useEffect, } from "react";
import { Code2Icon, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { BarChart as Chart, Users, DollarSign, LineChart, PieChart as PieCharts } from 'lucide-react';
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a href={href} className="text-white hover:text-orange-200 transition-colors">
    {children}
  </a>
);

const Star = ({ style }: { style: React.CSSProperties }) => (
  <div
    className="absolute bg-orange-100 rounded-full opacity-70"
    style={{
      width: "3px",
      height: "3px",
      ...style,
      animation: `twinkle ${Math.random() * 5 + 3}s linear infinite`,
    }}
  />
);

export default function Temp49() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [timer, setTimer] = useState(0);
  const [stars, setStars] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const newStars = Array.from({ length: 50 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }));
    setStars(newStars);
  }, []);

  return (
    <>
      <div className="md:container min-h-screen bg-black text-orange-200 relative overflow-hidden">
        {stars.map((style, index) => (
          <Star key={index} style={style} />
        ))}
        <header className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-transparent w-8 h-8 rounded-md flex items-center justify-center mr-2">
              <Code2Icon className="text-orange-200" size={40} />
            </div>
            <span className="text-1xl font-bold text-orange-400">SOORA</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
          </nav>
          <div className="hidden md:flex space-x-4">
            <a
              href="#get-started"
              className="bg-transparent text-white px-4 py-2 rounded-none border border-orange-200 hover:border-orange-400 transition-colors"
            >
              Login
            </a>

            <a
              href="#get-started"
              className="bg-orange-200 text-black px-4 py-2 rounded-none hover:bg-orange-400 transition-colors"
            >
              Get Started for Free
            </a>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="text-white" size={24} />
          </button>
        </header>

        {isMenuOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full h-full bg-black z-50 p-6">
            <button
              className="absolute top-6 right-6"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="text-white" size={24} />
            </button>
            <nav className="flex flex-col space-y-4 mt-16">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
              <a
                href="#get-started"
                className="bg-transparent text-center text-white px-4 py-2 rounded-none border border-orange-200 hover:border-orange-400 transition-colors"
              >
                Login
              </a>
              <a
                href="#get-started"
                className="bg-orange-200 text-white px-4 py-2 rounded-md hover:bg-orange-400 transition-colors text-center"
              >
                Get Started for Free
              </a>
            </nav>
          </div>
        )}

        <main className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl md:text-7xl font-bold mb-6">
            Ready to Supercharge
            <br />
            Your Development? With{" "}
            <span className="text-violet-500">SOORA.</span>
          </h1>

          <motion.p
            className="text-xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Have an idea for a startup, product or service? Bring it to life
            with MIXO
            <br />
            effortlessly and watch it grow.
          </motion.p>

          <motion.div
            className="flex justify-center space-x-4 mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
          >
            <span className="text-yellow-400">Free Trial Available</span>
            <span className="text-gray-300">•</span>
            <span className="text-gray-300">
              Over Thousands of Sites Created
            </span>
          </motion.div>

          <motion.a
            href="#get-started"
            className="bg-transparent text-white border border-orange-200 px-8 py-4 rounded-md text-xl hover:border-orange-400 hover:bg-transparent hover:text-orange-200 transition-colors inline-flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            Get Started for Free
            <span className="ml-2">✨</span>
          </motion.a>
        </main>

        <div className="absolute bottom-4 right-4 text-white opacity-50">
          Time elapsed: {timer} seconds
        </div>

        <style>{`
        @keyframes twinkle {
          0% { opacity: 0.7; }
          50% { opacity: 0.3; }
          100% { opacity: 0.7; }
        }
      `}</style>
      </div>      
      <AnimatedStatistics />
      <RealTimeCharts />
      <APIProviderDashboard/>
      <Analytics/>
      <Support/>
      <AdminDashboard/>
    </>
  );
}








interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

const stats: Stat[] = [
  { label: "Total Users", value: 10000 },
  { label: "Revenue", value: 1000000, suffix: "$" },
  { label: "Active Projects", value: 500 },
  { label: "Team Members", value: 50 },
];

function AnimatedStatistics() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000; // Animation duration in milliseconds
    const stepTime = 20; // Update every 20ms

    const timers = stats.map((stat, index) => {
      return setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          const step = stat.value / (duration / stepTime);
          newCounts[index] = Math.min(newCounts[index] + step, stat.value);
          return newCounts;
        });
      }, stepTime);
    });

    return () => timers.forEach(clearInterval);
  }, []);

  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="bg-black text-orange-200 p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-center mb-8 text-orange-200">
          Company Statistics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-orange-200 mb-2">
                {stat.suffix && <span>{stat.suffix}</span>}
                {Math.round(counts[index]).toLocaleString()}
              </div>
              <div className="text-orange-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// bar char stats
// npm i recharts
const COLORS = ["#00C49F", "#FFBB28", "#FF8042", "#0088FE"];

interface DataPoint {
  name: string;
  value: number;
}

function RealTimeCharts() {
  const [barData, setBarData] = useState<DataPoint[]>([
    { name: "A", value: 0 },
    { name: "B", value: 0 },
    { name: "C", value: 0 },
    { name: "D", value: 0 },
  ]);

  const [pieData, setPieData] = useState<DataPoint[]>([
    { name: "Category 1", value: 25 },
    { name: "Category 2", value: 25 },
    { name: "Category 3", value: 25 },
    { name: "Category 4", value: 25 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update bar chart data
      setBarData((prevData) =>
        prevData.map((item) => ({
          ...item,
          value: Math.floor(Math.random() * 100),
        }))
      );

      // Update pie chart data
      setPieData((prevData) => {
        const newData = prevData.map((item) => ({
          ...item,
          value: Math.max(5, Math.floor(Math.random() * 50)),
        }));
        const total = newData.reduce((sum, item) => sum + item.value, 0);
        return newData.map((item) => ({
          ...item,
          value: Math.round((item.value / total) * 100),
        }));
      });
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Real-Time Statistics
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-black p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Bar Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip
                contentStyle={{ backgroundColor: "#333", border: "none" }}
              />
              <Legend />
              <Bar dataKey="value" fill="#8884d8">
                {barData.map((index: any) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Pie Chart</h2>
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
                label={({ name, percent }: any) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {pieData.map((index: any) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: "#333", border: "none" }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}







function APIProviderDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">API Provider Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <DashboardCard title="Total API Calls" value="1,234,567" icon={<Chart />} />
        <DashboardCard title="Active Users" value="5,678" icon={<Users />} />
        <DashboardCard title="Revenue" value="$12,345" icon={<DollarSign />} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <APIManagement />
        <APIAnalytics />
      </div>
    </div>
  )
}

function DashboardCard({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="bg-muted p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {icon}
      </div>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  )
}

function APIManagement() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">API Management</h2>
      <ul className="space-y-4">
        <li className="bg-muted p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Weather API</h3>
          <p className="text-sm text-muted-foreground mb-2">Status: Active</p>
          <button className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm">Edit</button>
        </li>
        <li className="bg-muted p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Payment Gateway API</h3>
          <p className="text-sm text-muted-foreground mb-2">Status: Under Review</p>
          <button className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm">Edit</button>
        </li>
      </ul>
      <button className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded">Add New API</button>
    </div>
  )
}

function APIAnalytics() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">API Analytics</h2>
      <div className="bg-muted p-4 rounded-lg">
        <h3 className="font-semibold mb-2">API Usage (Last 30 days)</h3>
        <div className="h-64 flex items-end justify-between">
          {[40, 60, 45, 70, 55, 65, 50].map((height, index) => (
            <div key={index} className="w-8 bg-primary" style={{ height: `${height}%` }}></div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-sm text-muted-foreground">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
      </div>
    </div>
  )
}

function Analytics() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Analytics & Monitoring</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <AnalyticsCard title="API Calls" value="1,234,567" change="+5.3%" icon={<BarChart className="w-6 h-6" />} />
        <AnalyticsCard title="Error Rate" value="0.5%" change="-0.2%" icon={<PieCharts className="w-6 h-6" />} />
        <AnalyticsCard title="Avg. Latency" value="120ms" change="-10ms" icon={<LineChart className="w-6 h-6" />} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <APIUsageChart />
        <ErrorRateChart />
      </div>
    </div>
  )
}

function AnalyticsCard({ title, value, change, icon }: { title: string; value: string; change: string; icon: React.ReactNode }) {
  const isPositive = change.startsWith('+')
  return (
    <div className="bg-muted p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {icon}
      </div>
      <p className="text-3xl font-bold mb-2">{value}</p>
      <p className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {change} from last period
      </p>
    </div>
  )
}

function APIUsageChart() {
  return (
    <div className="bg-muted p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">API Usage Over Time</h3>
      <div className="h-64 flex items-end justify-between">
        {[40, 60, 45, 70, 55, 65, 50, 75, 60, 80, 70, 90].map((height, index) => (
          <div key={index} className="w-6 bg-blue-500" style={{ height: `${height}%` }}></div>
        ))}
      </div>
      <div className="flex justify-between mt-2 text-sm text-muted-foreground">
        <span>Jan</span>
        <span>Feb</span>
        <span>Mar</span>
        <span>Apr</span>
        <span>May</span>
        <span>Jun</span>
        <span>Jul</span>
        <span>Aug</span>
        <span>Sep</span>
        <span>Oct</span>
        <span>Nov</span>
        <span>Dec</span>
      </div>
    </div>
  )
}

function ErrorRateChart() {
  return (
    <div className="bg-muted p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Error Rate by API</h3>
      <div className="space-y-4">
        {[
          { name: 'Weather API', rate: 0.3 },
          { name: 'Payment Gateway API', rate: 0.5 },
          { name: 'Image Recognition API', rate: 0.8 },
          { name: 'Geocoding API', rate: 0.2 },
        ].map((api) => (
          <div key={api.name}>
            <div className="flex justify-between mb-1">
              <span>{api.name}</span>
              <span>{api.rate}%</span>
            </div>
            <div className="w-full bg-muted-foreground/20 rounded-full h-2.5">
              <div
                className="bg-red-300 h-2.5 rounded-full"
                style={{ width: `${api.rate * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
function Support() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Support & Documentation</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Help Center</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-primary hover:underline">Getting Started Guide</a></li>
            <li><a href="#" className="text-primary hover:underline">API Integration Best Practices</a></li>
            <li><a href="#" className="text-primary hover:underline">Troubleshooting Common Issues</a></li>
            <li><a href="#" className="text-primary hover:underline">Billing and Subscription FAQ</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <input type="text" id="name" className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input type="email" id="email" className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-1">Subject</label>
              <input type="text" id="subject" className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea id="message" rows={4} className="w-full p-2 border rounded" required></textarea>
            </div>
            <button type="submit" className="bg-primary text-primary-foreground px-4 py-2 rounded">
              Submit Ticket
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">API Documentation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <APIDocCard name="Weather API" />
          <APIDocCard name="Payment Gateway API" />
          <APIDocCard name="Image Recognition API" />
        </div>
      </div>
    </div>
  )
}

function APIDocCard({ name }: { name: string }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-muted-foreground mb-4">Comprehensive documentation for integrating and using the {name}.</p>
      <div className="space-y-2">
        <a href="#" className="block text-primary hover:underline">API Reference</a>
        <a href="#" className="block text-primary hover:underline">Code Samples</a>
        <a href="#" className="block text-primary hover:underline">Changelog</a>
      </div>
    </div>
  )
}

function AdminDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">User Management</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="p-2 text-left">User</th>
                <th className="p-2 text-left">Role</th>
                <th className="p-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <UserRow name="John Doe" email="john@example.com" role="User" />
              <UserRow name="Jane Smith" email="jane@example.com" role="API Provider" />
              <UserRow name="Bob Johnson" email="bob@example.com" role="Admin" />
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">API Moderation</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="p-2 text-left">API</th>
                <th className="p-2 text-left">Status</th>
                <th className="p-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <APIRow name="Weather API" status="Active" />
              <APIRow name="Payment Gateway API" status="Pending Review" />
              <APIRow name="Image Recognition API" status="Rejected" />
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Revenue Overview</h2>
        <div className="bg-muted p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Monthly Revenue</h3>
          <div className="h-64 flex items-end justify-between">
            {[40, 60, 45, 70, 55, 65, 50, 75, 60, 80, 70, 90].map((height, index) => (
              <div key={index} className="w-8 bg-blue-500" style={{ height: `${height}%` }}></div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-muted-foreground">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function UserRow({ name, email, role }: { name: string; email: string; role: string }) {
  return (
    <tr className="border-b">
      <td className="p-2">
        <div>{name}</div>
        <div className="text-sm text-muted-foreground">{email}</div>
      </td>
      <td className="p-2">{role}</td>
      <td className="p-2">
        <button className="text-primary hover:underline">Edit</button>
      </td>
    </tr>
  )
}

function APIRow({ name, status }: { name: string; status: string }) {
  return (
    <tr className="border-b">
      <td className="p-2">{name}</td>
      <td className="p-2">
        <span className={`px-2 py-1 rounded-full text-xs ${
          status === 'Active' ? 'bg-green-200 text-green-800' :
          status === 'Pending Review' ? 'bg-yellow-200 text-yellow-800' :
          'bg-red-200 text-red-800'
        }`}>
          {status}
        </span>
      </td>
      <td className="p-2">
        <button className="text-primary hover:underline mr-2">Review</button>
        <button className="text-primary hover:underline">Edit</button>
      </td>
    </tr>
  )
}

