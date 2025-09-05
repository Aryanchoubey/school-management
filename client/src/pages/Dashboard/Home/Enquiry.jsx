import { useState } from "react"
import { useNavigate, Outlet } from "react-router-dom"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

const sections = [
  { key: "inquiry", title: "Inquiry", icon: "❓" },
  { key: "interested", title: "Interested", icon: "💡" },
  { key: "confirmation", title: "Confirmation", icon: "✔️" },
  { key: "rejected", title: "Rejected", icon: "❌" },
  { key: "shortlisted", title: "Shortlisted", icon: "📝" },
  { key: "admission", title: "Admission", icon: "📄" },
]

export default function Enquiry() {
  const [filters, setFilters] = useState({ date: "", name: "", query: "", status: "" })
  const navigate = useNavigate()

  return (
    <div className="p-4 flex flex-col gap-6">
      {/* 🔹 Search + Filter Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Input
          type="date"
          value={filters.date}
          onChange={(e) => setFilters({ ...filters, date: e.target.value })}
          placeholder="Filter by Date"
        />
        <Input
          type="text"
          value={filters.name}
          onChange={(e) => setFilters({ ...filters, name: e.target.value })}
          placeholder="Student Name"
        />
        <Input
          type="text"
          value={filters.query}
          onChange={(e) => setFilters({ ...filters, query: e.target.value })}
          placeholder="Search by Enquiry"
        />
        <Select
          onValueChange={(val) => setFilters({ ...filters, status: val })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="inquiry">Inquiry</SelectItem>
            <SelectItem value="interested">Interested</SelectItem>
            <SelectItem value="confirmation">Confirmation</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
            <SelectItem value="shortlisted">Shortlisted</SelectItem>
            <SelectItem value="admission">Admission</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 🔹 Cards Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {sections.map((sec) => (
          <Card
            key={sec.key}
            onClick={() => navigate(`/enquiry/${sec.key}`)}
            className="cursor-pointer shadow-md hover:shadow-lg transition rounded-xl border"
          >
            <CardHeader className="flex flex-col items-center justify-center text-center">
              <div className="text-3xl">{sec.icon}</div>
              <CardTitle className="text-sm">{sec.title}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* 🔹 Nested Route Content */}
      {/* <div className="border rounded-xl shadow p-4 min-h-[200px]">
        <Outlet />
      </div> */}
    </div>
  )
}

