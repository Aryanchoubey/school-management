import React, { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Plus, Filter } from "lucide-react";
import axios from "axios";

export default function Classes() {
  const [classes, setClasses] = useState([]);
  const [openAdd, setOpenAdd] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const [newClassName, setNewClassName] = useState("");
  const [newTeacher, setNewTeacher] = useState("");
  const [newStudents, setNewStudents] = useState("");
  const [newGrade, setNewGrade] = useState("");

  const [query, setQuery] = useState("");
  const [gradeFilter, setGradeFilter] = useState("all");

  // const API_URL = "https://school-management-s6lr.onrender.com/api/classes";

  // Fetch classes from API
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const res = await axios.get( "https://school-management-s6lr.onrender.com/api/classes");
        if (res.data.success) {
          setClasses(res.data.classes);
        }
      } catch (err) {
        console.error("Error fetching classes:", err);
      }
    };
    fetchClasses();
  }, []);

  // Add new class via API
  const addClass = async () => {
    if (!newClassName || !newTeacher || !newStudents || !newGrade) {
      alert("Please fill all fields");
      return;
    }

    const newClass = {
      name: newClassName,
      teacher: newTeacher,
      students: parseInt(newStudents),
      grade: newGrade,
    };

    try {
      const res = await axios.post( "https://school-management-s6lr.onrender.com/api/classes", newClass);
      if (res.data.success) {
        setClasses([...classes, res.data.class]); // add returned class to state
        setNewClassName("");
        setNewTeacher("");
        setNewStudents("");
        setNewGrade("");
        setOpenAdd(false);
      } else {
        alert(res.data.message || "Failed to add class.");
      }
    } catch (err) {
      console.error("Error adding class:", err);
      alert("Failed to add class.");
    }
  };

  // Filtered classes based on search and grade
  const filteredClasses = useMemo(() => {
    return classes.filter((cls) => {
      const matchesQuery =
        cls.name.toLowerCase().includes(query.toLowerCase()) ||
        cls.teacher.toLowerCase().includes(query.toLowerCase());
      const matchesGrade = gradeFilter === "all" || cls.grade === gradeFilter;
      return matchesQuery && matchesGrade;
    });
  }, [classes, query, gradeFilter]);

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Classes</h1>
          <p className="text-muted-foreground text-sm">
            Manage classes, teachers, and schedules.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search classes or teacher..."
            className="w-full sm:w-64"
          />

          <Select onValueChange={(v) => setGradeFilter(v)}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="All Grades" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Grades</SelectItem>
              {[...Array(9)].map((_, i) => (
                <SelectItem key={i + 1} value={`${i + 1}`}>
                  Grade {i + 1}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            onClick={() => setGradeFilter((g) => (g === "all" ? "1" : "all"))}
          >
            <Filter size={16} />
          </Button>

          <Button onClick={() => setOpenAdd(true)}>
            <Plus size={14} className="mr-2" /> Add Class
          </Button>
        </div>
      </div>

      {/* Classes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClasses.map((cls) => (
          <Card
            key={cls._id || cls.id}
            className="hover:shadow-lg transition-shadow"
          >
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <CardTitle className="text-base md:text-lg">
                    {cls.name}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    Teacher: {cls.teacher}
                  </CardDescription>
                </div>
                <div className="flex flex-col items-end">
                  <Badge className="bg-yellow-500 text-black hover:bg-yellow-600">
                    Grade {cls.grade}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {cls.students} students
                  </span>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  Quick actions:
                </span>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setSelectedClass(cls)}
                  >
                    View
                  </Button>
                  <Button size="sm" variant="outline">
                    Edit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {filteredClasses.length === 0 && (
          <div className="col-span-full text-center py-8">
            <p className="text-sm text-muted-foreground">No classes found.</p>
          </div>
        )}
      </div>

      {/* Add Class Dialog */}
      <Dialog open={openAdd} onOpenChange={setOpenAdd}>
        <DialogContent className="sm:max-w-lg w-full">
          <DialogHeader>
            <DialogTitle>Add new class</DialogTitle>
            <DialogDescription>Fill the details below.</DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            <div>
              <Label>Class name</Label>
              <Input
                placeholder="e.g., Class 10 - A"
                value={newClassName}
                onChange={(e) => setNewClassName(e.target.value)}
              />
            </div>

            <div>
              <Label>Teacher</Label>
              <Input
                placeholder="Teacher name"
                value={newTeacher}
                onChange={(e) => setNewTeacher(e.target.value)}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Label>Grade</Label>
                <Select onValueChange={setNewGrade}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                  <SelectContent>
                    {[...Array(9)].map((_, i) => (
                      <SelectItem key={i + 1} value={`${i + 1}`}>
                        Grade {i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="w-full sm:w-32">
                <Label>Students</Label>
                <Input
                  type="number"
                  placeholder="--"
                  value={newStudents}
                  onChange={(e) => setNewStudents(e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="ghost" onClick={() => setOpenAdd(false)}>
                Cancel
              </Button>
              <Button onClick={addClass}>Save</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* View Class Dialog */}
      <Dialog
        open={!!selectedClass}
        onOpenChange={() => setSelectedClass(null)}
      >
        <DialogContent className="sm:max-w-md w-full">
          <DialogHeader>
            <DialogTitle>{selectedClass?.name}</DialogTitle>
            <DialogDescription>Class details</DialogDescription>
          </DialogHeader>

          <div className="space-y-3 mt-4">
            <p>
              <strong>Teacher:</strong> {selectedClass?.teacher}
            </p>
            <p>
              <strong>Grade:</strong> {selectedClass?.grade}
            </p>
            <p>
              <strong>Students:</strong> {selectedClass?.students}
            </p>

            <div className="flex justify-end gap-2">
              <Button variant="ghost" onClick={() => setSelectedClass(null)}>
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
