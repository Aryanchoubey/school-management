import React, { useState, useMemo } from "react";
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

export default function Classes() {
  const sampleClasses = [
    { id: 1, name: "Class 1 - A", teacher: "Ms. Rao", students: 28, grade: "1" },
    { id: 2, name: "Class 2 - B", teacher: "Mr. Kumar", students: 32, grade: "2" },
    { id: 3, name: "Science Lab", teacher: "Ms. Iyer", students: 24, grade: "8" },
    { id: 4, name: "Mathematics", teacher: "Mr. Singh", students: 30, grade: "9" },
    { id: 5, name: "History", teacher: "Ms. Patel", students: 26, grade: "7" },
    { id: 6, name: "English", teacher: "Mr. Sharma", students: 29, grade: "6" },
    { id: 7, name: "Computer Lab", teacher: "Ms. Verma", students: 20, grade: "5" },
    { id: 8, name: "Art & Craft", teacher: "Ms. Dutta", students: 18, grade: "4" },
  ];

  const [query, setQuery] = useState("");
  const [gradeFilter, setGradeFilter] = useState("all");
  const [openAdd, setOpenAdd] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const classes = useMemo(() => {
    return sampleClasses
      .filter((c) => (gradeFilter === "all" ? true : c.grade === gradeFilter))
      .filter(
        (c) =>
          c.name.toLowerCase().includes(query.toLowerCase()) ||
          (c.teacher || "").toLowerCase().includes(query.toLowerCase())
      );
  }, [query, gradeFilter]);

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
      {/* Header */}
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
              <SelectItem value="1">Grade 1</SelectItem>
              <SelectItem value="2">Grade 2</SelectItem>
              <SelectItem value="4">Grade 4</SelectItem>
              <SelectItem value="5">Grade 5</SelectItem>
              <SelectItem value="6">Grade 6</SelectItem>
              <SelectItem value="7">Grade 7</SelectItem>
              <SelectItem value="8">Grade 8</SelectItem>
              <SelectItem value="9">Grade 9</SelectItem>
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

      {/* Class Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((cls) => (
          <Card key={cls.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <CardTitle className="text-base md:text-lg">{cls.name}</CardTitle>
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
                <span className="text-sm text-muted-foreground">Quick actions:</span>
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

        {classes.length === 0 && (
          <div className="col-span-full text-center py-8">
            <p className="text-sm text-muted-foreground">
              No classes found. Try a different search or filter.
            </p>
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
              <Input placeholder="e.g., Class 10 - A" />
            </div>

            <div>
              <Label>Teacher</Label>
              <Input placeholder="Teacher name" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Label>Grade</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="w-full sm:w-32">
                <Label>Students</Label>
                <Input type="number" placeholder="--" />
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="ghost" onClick={() => setOpenAdd(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpenAdd(false)}>Save</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* View Class Dialog */}
      <Dialog open={!!selectedClass} onOpenChange={() => setSelectedClass(null)}>
        <DialogContent className="sm:max-w-md w-full">
          <DialogHeader>
            <DialogTitle>{selectedClass?.name}</DialogTitle>
            <DialogDescription>Class details</DialogDescription>
          </DialogHeader>

          <div className="space-y-3 mt-4">
            <p><strong>Teacher:</strong> {selectedClass?.teacher}</p>
            <p><strong>Grade:</strong> {selectedClass?.grade}</p>
            <p><strong>Students:</strong> {selectedClass?.students}</p>

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
