



import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, Download, Upload, Plus, Settings, Trash, Eye } from "lucide-react"
import { useNavigate } from "react-router-dom"

const students = [
  { id: "050000321", name: "John Tripathi", class: "XII", roll: 27, img: "https://i.pravatar.cc/100?u=1" },
  { id: "050000322", name: "Jane Tripathi", class: "XI", roll: 27, img: "https://i.pravatar.cc/100?u=2" },
  { id: "050000323", name: "Ravi Kumar", class: "XII", roll: 27, img: "https://i.pravatar.cc/100?u=3" },
]

export default function Myschool() {
  const [activePage, setActivePage] = useState("MySchool")

  const navigate = useNavigate ()
  const addNavigation =(path) => {
    navigate(path)

  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="flex-1 flex flex-col p-6">
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
          <Input placeholder="Search Student..." className="max-w-xs" />
          <div className="flex gap-2 flex-wrap">
            <Button onClick={() => addNavigation('/dashboard/addstudent')} ><Plus className="mr-2 h-4 w-4" /> Add</Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Shifts</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Morning</DropdownMenuItem>
                <DropdownMenuItem>Afternoon</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline"><Download className="mr-2 h-4 w-4" /> Download</Button>
            <Button variant="outline"><Upload className="mr-2 h-4 w-4" /> Import</Button>
          </div>
        </div>

        {/* Table View (Desktop) */}
        <div className="hidden md:block">
          <Card>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100 text-left">
                    <tr>
                      <th className="p-3">Sl. No</th>
                      <th className="p-3">Name</th>
                      <th className="p-3">Class</th>
                      <th className="p-3">Roll No</th>
                      <th className="p-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((s, idx) => (
                      <tr key={s.id} className="border-b">
                        <td className="p-3">{idx + 1}</td>
                        <td className="p-3 flex items-center gap-2">
                          <img src={s.img} alt={s.name} className="w-8 h-8 rounded-full" />
                          <div>
                            <div className="font-medium">{s.name}</div>
                            <div className="text-xs text-gray-500">ID: {s.id}</div>
                          </div>
                        </td>
                        <td className="p-3">{s.class}</td>
                        <td className="p-3">{s.roll}</td>
                        <td className="p-3 flex gap-2">
                          <Button variant="ghost" size="icon"><Eye className="h-4 w-4" /></Button>
                          <Button variant="ghost" size="icon"><Settings className="h-4 w-4" /></Button>
                          <Button variant="ghost" size="icon" className="text-red-500"><Trash className="h-4 w-4" /></Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Card View (Mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
          {students.map((s, idx) => (
            <Card key={s.id}>
              <CardContent className="p-4 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <img src={s.img} alt={s.name} className="w-10 h-10 rounded-full" />
                  <div>
                    <div className="font-medium">{s.name}</div>
                    <div className="text-xs text-gray-500">ID: {s.id}</div>
                  </div>
                </div>
                <div className="text-sm">Class: <span className="font-semibold">{s.class}</span></div>
                <div className="text-sm">Roll No: <span className="font-semibold">{s.roll}</span></div>
                <div className="flex gap-2 mt-2">
                  <Button variant="ghost" size="icon"><Eye className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon"><Settings className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" className="text-red-500"><Trash className="h-4 w-4" /></Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
