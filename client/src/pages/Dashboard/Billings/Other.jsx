import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export  function Other() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [records, setRecords] = useState([
    { id: 1, type: "Staff Salary", name: "Mr. Aryan", amount: "25000", date: "2025-09-10" },
    { id: 2, type: "Other Charges", name: "Electricity Bill", amount: "5000", date: "2025-09-12" },
  ])
  const [newRecord, setNewRecord] = useState({
    type: "Staff Salary",
    name: "",
    amount: "",
    date: ""
  })

  const handleAddRecord = () => {
    const nextId = records.length + 1
    setRecords([...records, { id: nextId, ...newRecord }])
    setNewRecord({ type: "Staff Salary", name: "", amount: "", date: "" })
    setIsDialogOpen(false)
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Staff Salary & Other Charges</h1>

      <Button onClick={() => setIsDialogOpen(true)} className="mb-6">
        Add New Record
      </Button>

      <Card className="overflow-x-auto">
        <CardHeader>
          <CardTitle>Records</CardTitle>
        </CardHeader>

        <CardContent>
          <table className="w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Type</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Amount (₹)</th>
                <th className="p-3 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={record.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{record.id}</td>
                  <td className="p-3">{record.type}</td>
                  <td className="p-3">{record.name}</td>
                  <td className="p-3">{record.amount}</td>
                  <td className="p-3">{record.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Add Salary / Other Charge</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4 mt-4">
            <Label>Type</Label>
            <Select
              value={newRecord.type}
              onValueChange={(value) => setNewRecord({ ...newRecord, type: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Staff Salary">Staff Salary</SelectItem>
                <SelectItem value="Other Charges">Other Charges</SelectItem>
              </SelectContent>
            </Select>

            <Label>Name</Label>
            <Input
              type="text"
              value={newRecord.name}
              placeholder="Staff name / Description"
              onChange={(e) => setNewRecord({ ...newRecord, name: e.target.value })}
            />

            <Label>Amount (₹)</Label>
            <Input
              type="number"
              value={newRecord.amount}
              placeholder="Enter amount"
              onChange={(e) => setNewRecord({ ...newRecord, amount: e.target.value })}
            />

            <Label>Date</Label>
            <Input
              type="date"
              value={newRecord.date}
              onChange={(e) => setNewRecord({ ...newRecord, date: e.target.value })}
            />

            <Button className="mt-4" onClick={handleAddRecord}>
              Add Record
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
