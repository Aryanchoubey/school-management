import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

// Sample homework data
const sampleHomework = [
  {
    id: 1,
    class: "Class 6",
    section: "A",
    subject: "Maths",
    assignment: "Complete Chapter 5 exercises 1-10",
    dueDate: "2025-09-10",
    teacher: "Mr. Sharma",
    status: "Pending",
  },
  {
    id: 2,
    class: "Class 6",
    section: "B",
    subject: "English",
    assignment: "Write a short story about summer",
    dueDate: "2025-09-12",
    teacher: "Ms. Nair",
    status: "Completed",
  },
  {
    id: 3,
    class: "Class 7",
    section: "A",
    subject: "Science",
    assignment: "Prepare a diagram of the human heart",
    dueDate: "2025-09-15",
    teacher: "Mrs. Verma",
    status: "Pending",
  },
];

export default function HomeWork() {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter homework based on selection
  const filteredHomework = sampleHomework.filter((hw) => {
    const matchesClass = selectedClass ? hw.class === selectedClass : true;
    const matchesSection = selectedSection ? hw.section === selectedSection : true;
    const matchesSearch = hw.assignment.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          hw.subject.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesClass && matchesSection && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-slate-100 to-indigo-50 p-6 md:p-12">
      <header className="max-w-5xl mx-auto text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-2">📝 Homework Dashboard</h1>
        <p className="text-indigo-600 text-lg md:text-xl">View and track homework by class & section</p>
      </header>

      {/* Filters */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-4 justify-center mb-10">
        <Input
          placeholder="🔍 Search homework or subject..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-64 shadow-lg rounded-xl border-0 bg-white"
        />

        <Select onValueChange={(val) => { setSelectedClass(val); setSelectedSection(""); }}>
          <SelectTrigger className="w-full md:w-56 shadow-lg rounded-xl bg-white">
            <SelectValue placeholder="Select Class" />
          </SelectTrigger>
          <SelectContent>
            {["Class 6", "Class 7"].map((cls) => (
              <SelectItem key={cls} value={cls}>{cls}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          onValueChange={(val) => setSelectedSection(val)}
          disabled={!selectedClass}
        >
          <SelectTrigger className="w-full md:w-56 shadow-lg rounded-xl bg-white">
            <SelectValue placeholder="Select Section" />
          </SelectTrigger>
          <SelectContent>
            {selectedClass &&
              ["A", "B"].map((sec) => <SelectItem key={sec} value={sec}>{sec}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>

      {/* Homework Cards */}
      <main className="max-w-5xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHomework.length > 0 ? (
          filteredHomework.map((hw) => (
            <Card key={hw.id} className="bg-white shadow-xl rounded-2xl hover:shadow-2xl transition">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl font-bold">{hw.subject}</CardTitle>
                <CardDescription className="text-indigo-600 text-sm md:text-base">{hw.class} - {hw.section}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <p className="text-slate-700">{hw.assignment}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">👩‍🏫 {hw.teacher}</span>
                  <Badge className={`px-3 py-1 rounded-full ${hw.status === "Completed" ? "bg-green-500 text-white" : "bg-yellow-400 text-white"}`}>
                    {hw.status}
                  </Badge>
                </div>
                <div className="text-sm text-slate-500 mt-1">Due: {hw.dueDate}</div>
                <Button size="sm" className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white">Mark as Completed</Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center col-span-full text-slate-500 mt-10">No homework found for this filter.</p>
        )}
      </main>

      
    </div>
  );
}
