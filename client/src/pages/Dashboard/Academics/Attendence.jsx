import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function Attendance() {
  const [selectedClass, setSelectedClass] = useState(null);
  const [attendance, setAttendance] = useState({});
  const [classes, setClasses] = useState([
    { id: 1, name: "Class 10 - A", teacher: "Mr. Sharma" },
    { id: 2, name: "Class 9 - B", teacher: "Ms. Verma" },
    { id: 3, name: "Class 8 - C", teacher: "Mr. Rao" },
  ]);
  const [openAdd, setOpenAdd] = useState(false);
  const [newClass, setNewClass] = useState({ name: "", teacher: "" });

  const studentsByClass = {
    1: [
      { id: 101, name: "Ravi Kumar", roll: 12 },
      { id: 102, name: "Neha Gupta", roll: 18 },
      { id: 103, name: "Arjun Singh", roll: 21 },
    ],
    2: [
      { id: 201, name: "Pooja Patel", roll: 5 },
      { id: 202, name: "Aman Yadav", roll: 11 },
    ],
    3: [
      { id: 301, name: "Sita Sharma", roll: 7 },
      { id: 302, name: "Rahul Jain", roll: 14 },
    ],
  };

  const handleAttendanceChange = (studentId, status) => {
    setAttendance((prev) => ({
      ...prev,
      [studentId]: status,
    }));
  };

  const handleSaveClass = () => {
    if (!newClass.name || !newClass.teacher) return;
    setClasses((prev) => [
      ...prev,
      { id: prev.length + 1, ...newClass },
    ]);
    setNewClass({ name: "", teacher: "" });
    setOpenAdd(false);
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">
      {!selectedClass ? (
        // Step 1: Show classes
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
            <h1 className="text-2xl font-semibold">Select a Class</h1>
            <Button onClick={() => setOpenAdd(true)}>+ Add Class</Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((cls) => (
              <Card
                key={cls.id}
                onClick={() => setSelectedClass(cls)}
                className="p-4 cursor-pointer hover:shadow-lg transition"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{cls.name}</CardTitle>
                  <CardDescription>Teacher: {cls.teacher}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        // Step 2: Show student attendance table
        <div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
            <div>
              <h1 className="text-2xl font-semibold">
                Attendance – {selectedClass.name}
              </h1>
              <p className="text-muted-foreground text-sm">
                Teacher: {selectedClass.teacher}
              </p>
            </div>
            <Button variant="outline" onClick={() => setSelectedClass(null)}>
              ← All Classes
            </Button>
          </div>

          <div className="overflow-x-auto rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Sl No.</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Roll</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {studentsByClass[selectedClass.id]?.map((student, index) => (
                  <TableRow key={student.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.roll}</TableCell>
                    <TableCell>
                      <Select
                        value={attendance[student.id] || ""}
                        onValueChange={(val) =>
                          handleAttendanceChange(student.id, val)
                        }
                      >
                        <SelectTrigger className="w-[120px]">
                          <SelectValue placeholder="Mark" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="present">✅ Present</SelectItem>
                          <SelectItem value="absent">❌ Absent</SelectItem>
                          <SelectItem value="leave">🟡 Leave</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex justify-end mt-6">
            <Button onClick={() => console.log("Saved Attendance:", attendance)}>
              Save Attendance
            </Button>
          </div>
        </div>
      )}

      {/* Add Class Dialog */}
      <Dialog open={openAdd} onOpenChange={setOpenAdd}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Class</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-2">
            <Input
              placeholder="Class Name (e.g., Class 11 - A)"
              value={newClass.name}
              onChange={(e) => setNewClass({ ...newClass, name: e.target.value })}
            />
            <Input
              placeholder="Teacher Name"
              value={newClass.teacher}
              onChange={(e) => setNewClass({ ...newClass, teacher: e.target.value })}
            />
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setOpenAdd(false)}>Cancel</Button>
              <Button onClick={handleSaveClass}>Save</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
