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

export default function Section() {
  const sections = [
    { id: 1, class: "Class 6", section: "A", teacher: "Ms. Rao", students: 28 },
    { id: 2, class: "Class 6", section: "B", teacher: "Mr. Sen", students: 30 },
    { id: 3, class: "Class 7", section: "A", teacher: "Ms. Iyer", students: 29 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <header className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold">Sections</h1>
          <p className="mt-1 text-sm text-slate-600">Manage sections of each class</p>
        </div>
        <Button size="sm">Add Section</Button>
      </header>

      <main className="max-w-6xl mx-auto mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((sec) => (
          <Card key={sec.id}>
            <CardHeader>
              <CardTitle>
                {sec.class} - {sec.section}
              </CardTitle>
              <CardDescription>Teacher in charge: {sec.teacher}</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <span className="text-sm">Students</span>
              <Badge>{sec.students}</Badge>
            </CardContent>
          </Card>
        ))}
      </main>
    </div>
  );
}
