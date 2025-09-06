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

export default function Class() {
  const classes = [
    { id: 1, name: "Class 6", teacher: "Mr. Sharma", students: 56 },
    { id: 2, name: "Class 7", teacher: "Mrs. Verma", students: 60 },
    { id: 3, name: "Class 8", teacher: "Mr. Khan", students: 58 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <header className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold">Classes</h1>
          <p className="mt-1 text-sm text-slate-600">Overview of all classes</p>
        </div>
        <Button size="sm">Add Class</Button>
      </header>

      <main className="max-w-6xl mx-auto mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {classes.map((cls) => (
          <Card key={cls.id}>
            <CardHeader>
              <CardTitle>{cls.name}</CardTitle>
              <CardDescription>Teacher in charge: {cls.teacher}</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <span className="text-sm">Students</span>
              <Badge>{cls.students}</Badge>
            </CardContent>
          </Card>
        ))}
      </main>
    </div>
  );
}
