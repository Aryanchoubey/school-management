import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { DeleteIcon, Eye, FilePenIcon, FileText, Plus, Trash2Icon } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { DialogDescription } from "@radix-ui/react-dialog"

const sessions = [
  {
    id: 1,
    sl: "1",
    name: "Rajdeep Dutt",
    startDate: "2022-06-01",
    endDate: "2022-12-01",
  },
  {
    id: 2,
    sl: "2",
    name: "Aryan Kumar",
    startDate: "2023-01-01",
    endDate: "2023-06-30",
  },
]

export default function Sessions() {
  const [year, setYear] = useState("2022-2023")
  const [search, setSearch] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const filteredSessions = sessions.filter((session) =>
    session.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <div className="flex gap-3 w-full md:w-auto">
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Select Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2022-2023">2022-2023</SelectItem>
              <SelectItem value="2021-2022">2021-2022</SelectItem>
            </SelectContent>
          </Select>

          <Input
            placeholder="Search Sessions"
            className="w-full md:w-[200px]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Add Session Row */}
      <div className="flex flex-col gap-4">
        <div className="text-lg font-semibold">Sessions</div>
        <div className="flex flex-col md:flex-row w-full gap-4">
          <Input type="search" placeholder="Enter Session Name" className="flex-1" />
          <Input type="date" placeholder="Start Date" className="flex-1" />
          <Input type="date" placeholder="End Date" className="flex-1" />
          <Button
            className="rounded-2xl border-2 border-amber-400 bg-white hover:bg-transparent flex items-center gap-2"
            onClick={() => setIsDialogOpen(true)}
          >
            <Plus className="h-4 w-4" />
            ADD NEW SESSION
          </Button>
        </div>
      </div>

      {/* Table (Desktop) */}
      <div className="hidden md:block overflow-x-auto mt-2">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 text-sm">
            <tr>
              <th className="p-2 text-left">Sl No.</th>
              <th className="p-2 text-left">Session Name</th>
              <th className="p-2 text-left">Start Date</th>
              <th className="p-2 text-left">End Date</th>
              <th className="p-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredSessions.map((session) => (
              <tr key={session.id} className="hover:bg-gray-50">
                <td className="p-3">{session.sl}</td>
                <td className="p-3">{session.name}</td>
                <td className="p-3">{session.startDate}</td>
                <td className="p-3">{session.endDate}</td>
                <td className="p-3 flex justify-center gap-3">
                  <FilePenIcon className="text-amber-400 cursor-pointer" />
                  <Trash2Icon className="text-amber-400 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card View (Mobile) */}
      <div className="grid gap-4 md:hidden mt-2">
        {filteredSessions.map((session) => (
          <Card key={session.id} className="rounded-xl shadow-sm">
            <CardContent className="p-4 flex flex-col gap-2">
              <div className="flex justify-between">
                <span className="font-semibold">{session.name}</span>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Sl No :</strong> {session.sl}</p>
                <p><strong>Start Date:</strong> {session.startDate}</p>
                <p><strong>End Date:</strong> {session.endDate}</p>
              </div>
              <div className="flex gap-4 mt-2">
                <Eye className="h-5 w-5 text-yellow-500 cursor-pointer" />
                <FileText className="h-5 w-5 text-yellow-500 cursor-pointer" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ✅ Responsive Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="min-w-[90vw] h-[90vh] md:w-[80vw] md:h-[85vh] rounded-2xl flex flex-col">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold pl-4">Add New Session</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>

          {/* Scrollable content area */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left side */}
              <div className="space-y-4">
                <Input placeholder="Session Name" className="w-full" />
                <Textarea placeholder="Description" className="w-full" />
              </div>

              {/* Right side */}
              <div className="space-y-4">
                <div className="flex flex-col gap-5">
                  <Input type="date" placeholder="Start Date" className="w-full h-[50px]" />
                  <Input type="date" placeholder="End Date" className="w-full h-[50px]" />
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-start gap-3 pt-4 mt-4">
            <Button
              variant="outline"
              className="rounded-full border-2 border-amber-400 text-amber-500 hover:bg-transparent"
              onClick={() => setIsDialogOpen(false)}
            >
              RESET
            </Button>
            <Button
              className="rounded-2xl bg-amber-500 hover:bg-amber-600 text-white"
              onClick={() => setIsDialogOpen(false)}
            >
              ADD SESSION
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
