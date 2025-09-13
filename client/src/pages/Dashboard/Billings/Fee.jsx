import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Fee() {
  const [isStudentDialogOpen, setIsStudentDialogOpen] = useState(false);
  const [isFeeDialogOpen, setIsFeeDialogOpen] = useState(false);

  const [students, setStudents] = useState([
    { name: "John Doe", class: "10th Grade", rollNumber: "1001" },
    { name: "Jane Smith", class: "9th Grade", rollNumber: "1002" },
  ]);

  const [feeRecords, setFeeRecords] = useState([
    { name: "John Doe", class: "10th Grade", amount: 5000, dueDate: "2025-10-01", status: "Paid" },
    { name: "Jane Smith", class: "9th Grade", amount: 4500, dueDate: "2025-10-15", status: "Pending" },
  ]);

  const [studentForm, setStudentForm] = useState({ name: "", class: "", rollNumber: "" });
  const [feeForm, setFeeForm] = useState({ name: "", class: "", amount: "", dueDate: "", status: "Pending" });

  const handleAddStudent = () => {
    setStudents([...students, studentForm]);
    setStudentForm({ name: "", class: "", rollNumber: "" });
    setIsStudentDialogOpen(false);
  };

  const handleAddFeeRecord = () => {
    setFeeRecords([...feeRecords, feeForm]);
    setFeeForm({ name: "", class: "", amount: "", dueDate: "", status: "Pending" });
    setIsFeeDialogOpen(false);
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Student Management & Billing</h1>

      {/* Student Records Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Student Records</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <div className="mb-4">
            <Dialog open={isStudentDialogOpen} onOpenChange={setIsStudentDialogOpen}>
              <DialogTrigger asChild>
                <Button>Add New Student</Button>
              </DialogTrigger>

              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Add New Student</DialogTitle>
                  <DialogDescription>Enter student details</DialogDescription>
                </DialogHeader>

                <div className="space-y-4">
                  <Input
                    placeholder="Student Name"
                    value={studentForm.name}
                    onChange={(e) => setStudentForm({ ...studentForm, name: e.target.value })}
                  />
                  <Input
                    placeholder="Class (e.g., 10th Grade)"
                    value={studentForm.class}
                    onChange={(e) => setStudentForm({ ...studentForm, class: e.target.value })}
                  />
                  <Input
                    placeholder="Roll Number"
                    value={studentForm.rollNumber}
                    onChange={(e) => setStudentForm({ ...studentForm, rollNumber: e.target.value })}
                  />
                </div>

                <DialogFooter>
                  <Button onClick={handleAddStudent}>Add Student</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Roll Number</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student, idx) => (
                <TableRow key={idx}>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.class}</TableCell>
                  <TableCell>{student.rollNumber}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Fee Records Section */}
      <Card>
        <CardHeader>
          <CardTitle>Student Fee Records</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <div className="mb-4">
            <Dialog open={isFeeDialogOpen} onOpenChange={setIsFeeDialogOpen}>
              <DialogTrigger asChild>
                <Button>Add New Fee Record</Button>
              </DialogTrigger>

              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Add Fee Record</DialogTitle>
                  <DialogDescription>Enter fee information</DialogDescription>
                </DialogHeader>

                <div className="space-y-4">
                  <Input
                    placeholder="Student Name"
                    value={feeForm.name}
                    onChange={(e) => setFeeForm({ ...feeForm, name: e.target.value })}
                  />
                  <Input
                    placeholder="Class"
                    value={feeForm.class}
                    onChange={(e) => setFeeForm({ ...feeForm, class: e.target.value })}
                  />
                  <Input
                    type="number"
                    placeholder="Amount (₹)"
                    value={feeForm.amount}
                    onChange={(e) => setFeeForm({ ...feeForm, amount: e.target.value })}
                  />
                  <Input
                    type="date"
                    placeholder="Due Date"
                    value={feeForm.dueDate}
                    onChange={(e) => setFeeForm({ ...feeForm, dueDate: e.target.value })}
                  />
                </div>

                <DialogFooter>
                  <Button onClick={handleAddFeeRecord}>Add Fee Record</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student Name</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Amount (₹)</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {feeRecords.map((record, idx) => (
                <TableRow key={idx}>
                  <TableCell>{record.name}</TableCell>
                  <TableCell>{record.class}</TableCell>
                  <TableCell>{record.amount}</TableCell>
                  <TableCell>{record.dueDate}</TableCell>
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
