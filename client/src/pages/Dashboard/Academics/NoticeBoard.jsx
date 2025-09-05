import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { DialogDescription } from "@radix-ui/react-dialog"

export default function NoticeBoard({ heading = "All Notices", initialNotices = [] }) {
  const [filter, setFilter] = useState("All")
  const [notices, setNotices] = useState([
    ...initialNotices,
    { id: "1", title: "Holiday", body: "School will remain closed on Monday", date: "2025-09-05", type: "General" },
    { id: "2", title: "Sports Day", body: "Annual Sports Meet on 15th September", date: "2025-09-06", type: "Event" },
    { id: "3", title: "Exam Notice", body: "Mid-term exams begin from 20th September", date: "2025-09-07", type: "Exam" },
  ])

  // new notice state
  const [newTitle, setNewTitle] = useState("")
  const [newBody, setNewBody] = useState("")
  const [newType, setNewType] = useState("General")
  const [isDialogOpen, setIsDialogOpen] = useState(false) // track dialog

  const filteredNotices =
    filter === "All" ? notices : notices.filter((n) => n.type === filter)

  function addNotice() {
    if (!newTitle || !newBody) return
    const newNotice = {
      id: crypto.randomUUID(),
      title: newTitle,
      body: newBody,
      type: newType,
      date: new Date().toISOString().slice(0, 10),
    }
    setNotices([newNotice, ...notices])
    setNewTitle("")
    setNewBody("")
    setNewType("General")
    setIsDialogOpen(false) // ✅ close dialog after saving
  }

  function deleteNotice(id) {
    setNotices(notices.filter((n) => n.id !== id))
  }

  return (
    <div className="flex flex-col p-4 gap-6">
      {/* Header + Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-xl font-bold">{heading}</h1>
        <div className="flex flex-col sm:flex-row gap-3">
          <Select onValueChange={(val) => setFilter(val)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="General">General</SelectItem>
              <SelectItem value="Event">Event</SelectItem>
              <SelectItem value="Exam">Exam</SelectItem>
            </SelectContent>
          </Select>
          <Input placeholder="Search by title" className="w-[200px]" />

          {/* Add Notice Dialog */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => setIsDialogOpen(true)}>Add Notice</Button>
            </DialogTrigger>
            <DialogContent className="min-w-[90vw] sm:max-w-[425px]">
              <DialogHeader>
                <DialogDescription></DialogDescription>
                <DialogTitle>Add New Notice</DialogTitle>
              </DialogHeader>
              <div className="space-y-3">
                <Input
                  placeholder="Notice Title"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
                <Textarea
                  placeholder="Notice Details"
                  value={newBody}
                  onChange={(e) => setNewBody(e.target.value)}
                />
                <Select value={newType} onValueChange={setNewType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="General">General</SelectItem>
                    <SelectItem value="Event">Event</SelectItem>
                    <SelectItem value="Exam">Exam</SelectItem>
                  </SelectContent>
                </Select>
                <Button onClick={addNotice}>Save Notice</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Notice Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredNotices.map((n) => (
          <Card
            key={n.id}
            className="shadow hover:shadow-lg transition rounded-xl border border-gray-200 flex flex-col justify-between"
          >
            <CardHeader>
              <CardTitle className="text-lg font-semibold">{n.title}</CardTitle>
              <span className="text-xs text-muted-foreground">{n.date}</span>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{n.body}</p>
              <p className="mt-2 text-xs text-blue-600 font-medium">Type: {n.type}</p>
              <Button
                variant="destructive"
                size="sm"
                className="mt-3"
                onClick={() => deleteNotice(n.id)}
              >
                Delete
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
