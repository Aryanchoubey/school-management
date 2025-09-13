import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function Salary() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [teacherSalaries, setTeacherSalaries] = useState([
    { name: "Ms. Jane Smith", subject: "Math", amount: 15000, date: "2025-09-30", status: "Paid" },
    { name: "Mr. John Brown", subject: "Science", amount: 14000, date: "2025-09-30", status: "Pending" },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    amount: "",
    date: "",
    status: "Pending",
  });

  const handleAddSalaryRecord = () => {
    setTeacherSalaries([...teacherSalaries, formData]);
    setFormData({ name: "", subject: "", amount: "", date: "", status: "Pending" });
    setIsDialogOpen(false);
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Teacher Salary Records</h1>

      {/* Dialog to Add New Salary Record */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button className="mb-4">Add New Teacher Salary</Button>
        </DialogTrigger>

        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Add Salary Record</DialogTitle>
            <DialogDescription>Enter teacher salary details</DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <Input
              placeholder="Teacher Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />

            <Input
              placeholder="Subject (e.g., Math, Science)"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            />

            <Input
              type="number"
              placeholder="Salary Amount (₹)"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            />

            <Input
              type="date"
              placeholder="Payment Date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>

          <DialogFooter>
            <Button onClick={handleAddSalaryRecord}>Add Salary Record</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Teacher Salary Table */}
      <Card>
        <CardHeader>
          <CardTitle>Salary Payment Records</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Teacher Name</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Salary Amount (₹)</TableHead>
                <TableHead>Payment Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teacherSalaries.map((record, idx) => (
                <TableRow key={idx}>
                  <TableCell>{record.name}</TableCell>
                  <TableCell>{record.subject}</TableCell>
                  <TableCell>{record.amount}</TableCell>
                  <TableCell>{record.date}</TableCell>
                  <TableCell>
                    {record.status === "Paid" ? (
                      <span className="text-green-600">Paid</span>
                    ) : (
                      <span className="text-red-600">Pending</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
