import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

// Sample timetable data
const timetableData = {
  "Class 6": {
    A: [
      { subject: "Maths", time: "9:00 - 9:40", teacher: "Mr. Sharma", color: "bg-blue-500" },
      { subject: "Science", time: "9:45 - 10:25", teacher: "Mrs. Verma", color: "bg-green-500" },
    ],
    B: [
      { subject: "English", time: "10:30 - 11:10", teacher: "Ms. Nair", color: "bg-purple-500" },
      { subject: "History", time: "11:15 - 11:55", teacher: "Mr. Khan", color: "bg-orange-500" },
    ],
  },
  "Class 7": {
    A: [
      { subject: "Physics", time: "9:00 - 9:40", teacher: "Dr. Rao", color: "bg-pink-500" },
      { subject: "Chemistry", time: "9:45 - 10:25", teacher: "Dr. Mehta", color: "bg-red-500" },
    ],
  },
};

export default function TimeTable() {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleShowTimetable = () => {
    if (selectedClass && selectedSection) setOpen(true);
  };

  const filteredClasses = Object.keys(timetableData).filter((cls) =>
    cls.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-indigo-50 p-8">
      <header className="max-w-5xl mx-auto text-center mb-8">
        <h1 className="text-4xl font-extrabold text-amber-400 mb-2">📄 Timetable Viewer</h1>
        <p className="text-amber-400 text-lg">Search & select a Class & Section to view timetable like PDF</p>
      </header>

      {/* Search + Select */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-4 justify-center mb-10">
        <Input
          placeholder="🔍 Search Class..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-64 shadow-lg rounded-xl border-0 bg-white"
        />
        <Select
          onValueChange={(val) => { setSelectedClass(val); setSelectedSection(""); }}
        >
          <SelectTrigger className="w-full md:w-56 shadow-lg rounded-xl bg-white">
            <SelectValue placeholder="Select Class" />
          </SelectTrigger>
          <SelectContent>
            {filteredClasses.length > 0 ? (
              filteredClasses.map((cls) => (
                <SelectItem key={cls} value={cls}>{cls}</SelectItem>
              ))
            ) : (
              <div className="p-2 text-sm text-slate-500">No class found</div>
            )}
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
              Object.keys(timetableData[selectedClass]).map((sec) => (
                <SelectItem key={sec} value={sec}>{sec}</SelectItem>
              ))}
          </SelectContent>
        </Select>

        <Button
          onClick={handleShowTimetable}
          disabled={!selectedSection}
          className=" hover:  shadow-lg rounded-xl px-6 py-2 font-semibold"
        >
          Show Timetable
        </Button>
      </div>

      {/* PDF-like Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-full max-w-5xl h-[90vh] md:h-[85vh] rounded-3xl p-6 overflow-y-auto bg-white shadow-2xl border border-slate-200">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-3xl font-bold text-amber-400 mb-1">
              {selectedClass} {selectedSection && `(${selectedSection})`}
            </DialogTitle>
            <DialogDescription className="text-amber-400">
              Timetable — Scrollable, PDF-like view
            </DialogDescription>
          </DialogHeader>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {selectedClass &&
              selectedSection &&
              timetableData[selectedClass][selectedSection].map((slot, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col justify-between p-6 rounded-2xl text-white shadow-md transform hover:scale-[1.03] transition ${slot.color}`}
                >
                  <div>
                    <div className="font-semibold text-lg">{slot.subject}</div>
                    <div className="text-sm mt-1 opacity-90">👩‍🏫 {slot.teacher}</div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="mt-3 bg-white/25 text-white text-sm w-fit px-3 py-1 rounded-full"
                  >
                    {slot.time}
                  </Badge>
                </div>
              ))}
          </div>

          {/* Optional Print Button */}
          <div className="mt-8 flex justify-end">
            <Button
              onClick={() => window.print()}
              className=" rounded-xl px-6 py-2 shadow-lg font-semibold"
            >
              🖨 Print Timetable
            </Button>
          </div>
        </DialogContent>
      </Dialog>

     
    </div>
  );
}
