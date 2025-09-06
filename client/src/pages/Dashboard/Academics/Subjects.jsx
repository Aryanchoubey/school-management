import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Filter } from "lucide-react";

export default function Subjects() {
  const subjects = [
    { id: 1, name: "Mathematics", teacher: "Mr. Sharma", periods: 6, color: "bg-blue-500" },
    { id: 2, name: "Science", teacher: "Mrs. Verma", periods: 5, color: "bg-green-500" },
    { id: 3, name: "English", teacher: "Ms. Iyer", periods: 6, color: "bg-purple-500" },
    { id: 4, name: "Social Studies", teacher: "Mr. Khan", periods: 4, color: "bg-orange-500" },
    { id: 5, name: "Computer Science", teacher: "Ms. Rao", periods: 3, color: "bg-pink-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 p-4 md:p-8">
      {/* Header */}
      <header className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">📚 Subjects</h1>
          <p className="mt-1 text-sm text-slate-600">
            Manage subjects, teachers & weekly schedules
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="flex items-center bg-white px-3 py-2 rounded-xl shadow-sm w-full sm:w-64">
            <Input
              placeholder="Search subjects..."
              className="border-none focus:ring-0 focus:outline-none"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter size={16} /> Filter
          </Button>
          <Button>Add Subject</Button>
        </div>
      </header>

      {/* Subject Cards */}
      <main className="max-w-6xl mx-auto mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {subjects.map((sub) => (
          <Card
            key={sub.id}
            className="hover:shadow-lg transition-all duration-200 border-none rounded-2xl bg-white"
          >
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-semibold">{sub.name}</CardTitle>
              <span
                className={`w-3 h-3 rounded-full ${sub.color} shadow-md`}
              ></span>
            </CardHeader>
            <CardContent className="space-y-3">
              <CardDescription className="text-slate-600">
                Teacher: <span className="font-medium">{sub.teacher}</span>
              </CardDescription>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500">Periods / Week</span>
                <Badge className={`${sub.color} text-white`}>
                  {sub.periods}
                </Badge>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="w-full mt-2 rounded-xl"
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </main>

      <footer className="max-w-6xl mx-auto mt-10 text-center text-sm text-slate-500">
        © 2025 Greenfield Public School — Subjects Management
      </footer>
    </div>
  );
}
