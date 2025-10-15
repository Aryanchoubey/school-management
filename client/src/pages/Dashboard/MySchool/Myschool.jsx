import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Eye, Settings, Trash, Download, Upload, Plus } from "lucide-react";

export default function Myschool() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  const addNavigation = (path) => {
    navigate(path);
  };

  // Fetch students from API
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/students");
        if (res.data.success) setStudents(res.data.students);
      } catch (err) {
        console.error("Error fetching students:", err);
      }
    };
    fetchStudents();
  }, []);
   const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this student?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/students/${id}`);
      // Remove student from UI
      setStudents(students.filter((s) => s._id !== id));
    } catch (error) {
      console.error("Error deleting student:", error);
      alert("Failed to delete student.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-1 flex flex-col p-6">
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
          <Input placeholder="Search Student..." className="max-w-xs" />
          <div className="flex gap-2 flex-wrap">
            <Button onClick={() => addNavigation("/dashboard/addstudent")}>
              <Plus className="mr-2 h-4 w-4" /> Add
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" /> Download
            </Button>
            <Button variant="outline">
              <Upload className="mr-2 h-4 w-4" /> Import
            </Button>
          </div>
        </div>

        {/* Student Table */}
        <div className="hidden md:block">
          <Card>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100 text-left">
                    <tr>
                      <th className="p-3">Sl. No</th>
                      <th className="p-3">Name</th>
                      <th className="p-3">Email</th>
                      <th className="p-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((s, idx) => (
                      <tr key={s._id} className="border-b">
                        <td className="p-3">{idx + 1}</td>
                        <td className="p-3">{s.name}</td>
                        <td className="p-3">{s.email}</td>
                        <td className="p-3 flex gap-2">
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Settings className="h-4 w-4" />
                          </Button>
                          <Button
                          onClick={()=>handleDelete(s._id)}
                            variant="ghost"
                            size="icon"
                            className="text-red-500"
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mobile Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
          {students.map((s) => (
            <Card key={s._id}>
              <CardContent className="p-4 flex flex-col gap-3">
                <div className="font-medium">{s.name}</div>
                <div className="text-sm">{s.email}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
