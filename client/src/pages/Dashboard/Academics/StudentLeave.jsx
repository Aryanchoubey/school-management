import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, FileText, Plus } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { DialogDescription } from "@radix-ui/react-dialog"

const studentLeaves = [
  {
    id: 1,
    enrollment: "25143",
    name: "Rajdeep Dutt",
    class: "XII",
    section: "C",
    reason: "Fever",
    leaveDate: "21/09 to 12.10",
    status: "Active",
  },
  {
    id: 2,
    enrollment: "25143",
    name: "Rajdeep Dutt",
    class: "XII",
    section: "C",
    reason: "Fever",
    leaveDate: "21/09 to 12.10",
    status: "Active",
  },
]

export default function StudentLeave() {
  const [year, setYear] = useState("2022-2023")
  const [search, setSearch] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const filteredLeaves = studentLeaves.filter((leave) =>
    leave.name.toLowerCase().includes(search.toLowerCase())
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
            placeholder="Search Student"
            className="w-full md:w-[200px]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Button that opens Dialog */}
        <Button
          className="rounded-2xl border-2 border-amber-400 bg-white hover:bg-transparent flex items-center gap-2"
          onClick={() => setIsDialogOpen(true)}
        >
          <Plus className="h-4 w-4" />
          Add New Leave
        </Button>
      </div>

      {/* Table (Desktop) */}
      <div className="hidden md:block overflow-x-auto mt-2">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 text-sm">
            <tr>
              <th className="p-2 text-left">Enrollment</th>
              <th className="p-2 text-left">Student Name</th>
              <th className="p-2 text-left">Class</th>
              <th className="p-2 text-left">Section</th>
              <th className="p-2 text-left">Reason</th>
              <th className="p-2 text-left">Leave Date</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeaves.map((leave) => (
              <tr key={leave.id} className="hover:bg-gray-50">
                <td className="p-3">{leave.enrollment}</td>
                <td className="p-3">{leave.name}</td>
                <td className="p-3">{leave.class}</td>
                <td className="p-3">{leave.section}</td>
                <td className="p-3">{leave.reason}</td>
                <td className="p-3">{leave.leaveDate}</td>
                <td className="p-3">{leave.status}</td>
                <td className="p-3 flex justify-center gap-2">
                  <Eye className="h-5 w-5 text-yellow-500 cursor-pointer" />
                  <FileText className="h-5 w-5 text-yellow-500 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card View (Mobile) */}
      <div className="grid gap-4 md:hidden mt-2">
        {filteredLeaves.map((leave) => (
          <Card key={leave.id} className="rounded-xl shadow-sm">
            <CardContent className="p-4 flex flex-col gap-2">
              <div className="flex justify-between">
                <span className="font-semibold">{leave.name}</span>
                <span className="text-sm text-gray-500">{leave.status}</span>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Enrollment:</strong> {leave.enrollment}</p>
                <p><strong>Class:</strong> {leave.class} - {leave.section}</p>
                <p><strong>Reason:</strong> {leave.reason}</p>
                <p><strong>Leave Date:</strong> {leave.leaveDate}</p>
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
            <DialogTitle className="text-xl font-bold pl-4 ">Add New Leave</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>

          {/* Scrollable content area */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left side */}
              <div className="space-y-4">
                <Select>
                  <SelectTrigger className="w-full h-[50px]">
                    <SelectValue placeholder="Select Class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="X">Class X</SelectItem>
                    <SelectItem value="XI">Class XI</SelectItem>
                    <SelectItem value="XII">Class XII</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-full h-[50px]">
                    <SelectValue placeholder="Select Section" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="A">Section A</SelectItem>
                    <SelectItem value="B">Section B</SelectItem>
                    <SelectItem value="C">Section C</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-full h-[50px]">
                    <SelectValue placeholder="Select Student" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rajdeep">Rajdeep Dutt</SelectItem>
                    <SelectItem value="aryan">Aryan Kumar</SelectItem>
                  </SelectContent>
                </Select>

                <Textarea placeholder="Reason" className="w-full" />
              </div>

              {/* Right side */}
              <div className="space-y-4">
                <div className="flex flex-col gap-3">
                  
                  <div className="flex gap-10">
                    <label className="text-sm font-medium">Number Of Leave Days:</label>
                    <label className="flex text-sm items-center gap-2">
                      <input type="radio" name="leaveType" className="accent-amber-500" />
                      Single Day
                    </label>
                    <label className="flex text-sm items-center gap-2">
                      <input type="radio" name="leaveType" className="accent-amber-500" />
                      Multiple Days
                    </label>
                  </div>
                </div>

                <div className="flex flex-col gap-5">
                  <Input type="date" className="lg:w-[35vw] lg:h-[50px]" />
                  <Input type="date" className="lg:w-[35vw] lg:h-[50px]" />
                </div>

                
              
                  <div className="flex gap-10">
                        <label className="text-sm font-medium  ">Status:</label>
                    <label className="flex text-sm items-center gap-2">
                      <input type="radio" name="status" className="accent-amber-500" />
                      Approved
                    </label>
                    <label className="flex text-sm items-center gap-2">
                      <input type="radio" name="status" className="accent-amber-500" />
                      Unapproved
                    </label>
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
              ADD LEAVE
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
