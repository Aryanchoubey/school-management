import React from "react"
import {
  Bell,
  Search,
  User,
  Calendar,
  FileText,
  PlusCircle,
  BookOpen,
  DollarSign,
  CheckCircle,
} from "lucide-react"
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function SuperAdmin() {
  const navigate = useNavigate ()
  const addNavigation =(path) => {
    navigate(path)

  }
  // --- sample data ---
  const studentStats = { total: 1286, newAdmissions: 34, attendancePct: 92.4 }
  const teacherStats = { total: 78, onLeaveToday: 5 }
  const finance = {
    collected: 1250000,
    pending: 82000,
    expenses: [
      { month: "Jan", amt: 80000 },
      { month: "Feb", amt: 72000 },
      { month: "Mar", amt: 95000 },
      { month: "Apr", amt: 61000 },
      { month: "May", amt: 78000 },
      { month: "Jun", amt: 54000 },
    ],
  }
  const attendanceByClass = [
    { name: "1A", pct: 95 },
    { name: "2B", pct: 93 },
    { name: "3C", pct: 88 },
    { name: "4A", pct: 90 },
    { name: "5B", pct: 94 },
  ]
  const upcoming = [
    { date: "2025-09-10", title: "Quarterly Exam - Grade 6-8" },
    { date: "2025-09-15", title: "PTM - Parent Teacher Meeting" },
    { date: "2025-10-02", title: "Gandhi Jayanti - Holiday" },
  ]
  const notices = [
    {
      time: "2h ago",
      title: "Bus route change for Sector 5",
      excerpt: "Route 3 will now start 10 mins earlier.",
    },
    {
      time: "1d ago",
      title: "Science fair registrations open",
      excerpt: "Students can register via the portal by Sept 12.",
    },
  ]
  const quickActions = [
    { icon: PlusCircle, label: "Register Student" },
    { icon: User, label: "Register Teacher" },
    { icon: Calendar, label: "Timetable Setup" },
    { icon: FileText, label: "Reports" },
  ]
  const COLORS = ["#7DD3FC", "#BBF7D0"]

  const neu = "shadow-neu rounded-2xl bg-[#f8fbff] p-4"

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f6fbff] to-white p-4 md:p-8 font-sans text-slate-800">
      {/* Top Nav */}
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white shadow-card">
            <div className="text-2xl font-bold text-sky-500">S</div>
          </div>
          <div>
            <div className="text-lg font-semibold">Starlight Academy</div>
            <div className="text-sm text-slate-400">Admin Panel</div>
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 w-full sm:max-w-md">
          <label className="relative block">
            <input
              className="w-full rounded-3xl border border-transparent py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-sky-200 bg-white shadow-inner"
              placeholder="Search students, teachers, reports..."
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <Search size={18} />
            </span>
          </label>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3">
          <button className="relative p-3 rounded-full bg-white shadow-card">
            <Bell size={18} />
            <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </button>
          <div className="flex items-center gap-2 p-2 rounded-xl bg-white shadow-card cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-sky-300 to-green-200 flex items-center justify-center text-white font-bold">
              AT
            </div>
            <div className="text-sm hidden sm:block">
              <div className="font-medium">Admin</div>
              <div className="text-xs text-slate-400">Principal</div>
            </div>
          </div>
        </div>
      </header>

      {/* Grid Layout */}
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left wide column */}
        <section className="lg:col-span-8 space-y-6">
          {/* Stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Student Card */}
            <div className={`${neu} flex flex-col gap-2`}>
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-slate-500">Student Stats</div>
                <div className="text-xs text-slate-400">Updated today</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="text-3xl font-semibold">{studentStats.total}</div>
                  <div className="text-sm text-slate-500">Total Students</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-medium text-sky-500">
                    +{studentStats.newAdmissions}
                  </div>
                  <div className="text-sm text-slate-500">New Admissions</div>
                </div>
              </div>
              <div className="mt-2">
                <div className="text-sm text-slate-500">Attendance</div>
                <div className="w-full bg-white rounded-full h-3 mt-2 shadow-inner overflow-hidden">
                  <div
                    style={{ width: `${studentStats.attendancePct}%` }}
                    className="h-3 rounded-full bg-gradient-to-r from-sky-300 to-green-200"
                  />
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {studentStats.attendancePct}% today
                </div>
              </div>
            </div>

            {/* Teacher Card */}
            <div className={`${neu} flex flex-col gap-2`}>
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-slate-500">Teacher Stats</div>
                <div className="text-xs text-slate-400">Real-time</div>
              </div>
              <div className="text-3xl font-semibold">{teacherStats.total}</div>
              <div className="text-sm text-slate-500">Total Teachers</div>
              <div className="mt-3 flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-200" />
                  <div className="text-sm">On Leave Today</div>
                </div>
                <div className="ml-auto text-lg font-medium text-rose-500">
                  {teacherStats.onLeaveToday}
                </div>
              </div>
            </div>

            {/* Finance Card */}
            <div className={`${neu} flex flex-col gap-2`}>
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-slate-500">Finance Overview</div>
                <div className="text-xs text-slate-400">Monthly snapshot</div>
              </div>
              <div className="flex flex-wrap gap-6">
                <div>
                  <div className="text-lg font-semibold">
                    ₹{finance.collected.toLocaleString()}
                  </div>
                  <div className="text-xs text-slate-500">Fees Collected</div>
                </div>
                <div>
                  <div className="text-lg font-semibold">
                    ₹{finance.pending.toLocaleString()}
                  </div>
                  <div className="text-xs text-slate-500">Pending Fees</div>
                </div>
              </div>
              <div className="mt-2 h-20">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={finance.expenses}>
                    <defs>
                      <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#7DD3FC" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#BBF7D0" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="amt"
                      stroke="#60A5FA"
                      fillOpacity={0.3}
                      fill="url(#grad)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Quick actions + Attendance */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Quick actions */}
            <div className={`${neu}`}>
              <div className="text-sm font-medium mb-3">Quick Actions</div>
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((q) => (
                  <button
                    key={q.label}
                    className="flex items-center gap-2 sm:gap-3 p-3 rounded-xl bg-white shadow-inner text-sm"
                  >
                    <q.icon size={18} />
                    <span>{q.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Attendance tracker */}
            <div className={`lg:col-span-2 ${neu}`}>
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm font-medium">Live Attendance Tracker</div>
                <div className="text-xs text-slate-400">Updated live</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="h-44">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={attendanceByClass}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="pct" fill="#7DD3FC" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="h-44 p-3 bg-white rounded-xl shadow-inner text-sm">
                  <div className="font-medium mb-2">NFC / Palm ID Logs</div>
                  <ul className="space-y-2 overflow-auto h-32">
                    <li>08:15 - Rahul Sharma (1A) - Present</li>
                    <li>08:16 - Meera Patel (2B) - Present</li>
                    <li>08:18 - Arjun Singh (3C) - Absent</li>
                    <li>08:19 - Tanya Rao (4A) - Present</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className={`${neu}`}>
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm font-medium">Messages & Announcements</div>
              <button className="text-sm px-3 py-1 rounded-lg bg-white shadow-inner">
                Post New
              </button>
            </div>
            <div className="space-y-3">
              {notices.map((n) => (
                <div
                  key={n.title}
                  className="p-3 rounded-xl bg-white shadow-inner flex items-start gap-3"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-sky-300 mt-2" />
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="font-medium">{n.title}</div>
                      <div className="text-xs text-slate-400">{n.time}</div>
                    </div>
                    <div className="text-sm text-slate-500">{n.excerpt}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Right column */}
        <aside className="lg:col-span-4 space-y-6">
          {/* Events */}
          <div className={`${neu}`}>
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm font-medium">Upcoming Events / Exams</div>
              <div className="text-xs text-slate-400">Calendar</div>
            </div>
            <div className="space-y-3">
              {upcoming.map((u) => (
                <div
                  key={u.date}
                  className="p-3 rounded-xl bg-white shadow-inner flex items-center gap-3"
                >
                  <div className="text-xs text-slate-600 w-20 shrink-0">
                    {new Date(u.date).toLocaleDateString()}
                  </div>
                  <div>
                    <div className="font-medium">{u.title}</div>
                    <div className="text-xs text-slate-400">{u.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Attendance summary */}
          <div className={`${neu}`}>
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm font-medium">Attendance Summary</div>
              <div className="text-xs text-slate-400">This week</div>
            </div>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { name: "Present", value: 92 },
                      { name: "Absent", value: 8 },
                    ]}
                    dataKey="value"
                    innerRadius={40}
                    outerRadius={70}
                  >
                    <Cell fill={COLORS[0]} />
                    <Cell fill={COLORS[1]} />
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Shortcuts */}
          <div className={`${neu}`}>
            <div className="text-sm font-medium mb-3">Shortcuts</div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <Button onClick={() => addNavigation('/dashboard/timetables')}  className="p-3 rounded-xl bg-white shadow-inner flex items-center gap-2">
                <BookOpen size={16} /> Timetable
              </Button>
              <button className="p-3 rounded-xl bg-white shadow-inner flex items-center gap-2">
                <DollarSign size={16} /> Fees
              </button>
             <Button onClick={() => addNavigation('/dashboard/attendence')}  className="p-3 rounded-xl bg-white shadow-inner flex items-center gap-2">
                <CheckCircle size={16} /> Attendance
              </Button>
              <button className="p-3 rounded-xl bg-white shadow-inner flex items-center gap-2">
                <FileText size={16} /> Reports
              </button>
            </div>
          </div>
        </aside>
      </main>

      {/* ✅ fixed: plain style (not jsx) */}
      <style>{`
        .shadow-neu {
          box-shadow: 12px 12px 24px rgba(160, 174, 192, 0.12),
            -12px -12px 24px rgba(255, 255, 255, 0.8);
        }
        .shadow-card {
          box-shadow: 6px 6px 12px rgba(160, 174, 192, 0.08),
            -6px -6px 12px rgba(255, 255, 255, 0.85);
        }
        .shadow-inner {
          box-shadow: inset 4px 4px 8px rgba(160, 174, 192, 0.05),
            inset -4px -4px 8px rgba(255, 255, 255, 0.7);
        }
      `}</style>
    </div>
  )
}
