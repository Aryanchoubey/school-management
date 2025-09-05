import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { X } from "lucide-react"

export default function UserManagement() {
  const [open, setOpen] = useState(true)
  const navigate = useNavigate()

  const adduser = (path) => {
    navigate(path)
    setOpen(false)
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen)
        if (!isOpen) {
          // User clicked outside the dialog (overlay) → go back to dashboard
          navigate("/dashboard")
        }
      }}
    >
      <DialogContent
        className="w-[95vw] sm:max-w-2xl md:max-w-6xl lg:max-w-7xl h-[85vh] overflow-y-auto rounded-xl border-2 border-gray-300 shadow-2xl"
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Edit Student</DialogTitle>
          <DialogDescription />
        </DialogHeader>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" placeholder="First Name" />
          </div>

          {/* Last Name */}
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" placeholder="Last Name" />
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Email" />
          </div>

          {/* Gender */}
          <div>
            <Label htmlFor="gender">Gender</Label>
            <Select>
              <SelectTrigger id="gender">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Father Name */}
          <div>
            <Label htmlFor="fatherName">Father's Name</Label>
            <Input id="fatherName" placeholder="Father's Name" />
          </div>

          {/* Mother Name */}
          <div>
            <Label htmlFor="motherName">Mother's Name</Label>
            <Input id="motherName" placeholder="Mother's Name" />
          </div>

          {/* Date of Birth */}
          <div className="flex flex-col">
            <Label htmlFor="dob">Date Of Birth</Label>
            <div className="relative">
              <Input id="dob" type="date" />
              {/* <Calendar className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" /> */}
            </div>
          </div>

          {/* User Type */}
          <div>
            <Label htmlFor="userType">User Type</Label>
            <Select>
              <SelectTrigger id="userType">
                <SelectValue placeholder="Select user type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="student">Student</SelectItem>
                <SelectItem value="teacher">Teacher</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Joining Date */}
          <div className="flex flex-col">
            <Label htmlFor="joinDate">Joining Date</Label>
            <div className="relative">
              <Input id="joinDate" type="date" />
              {/* <Calendar className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" /> */}
            </div>
          </div>

          {/* Department */}
          <div>
            <Label htmlFor="department">Department</Label>
            <Input id="department" placeholder="Department" />
          </div>

          {/* Permanent Address */}
          <div className="col-span-1 md:col-span-2">
            <Label htmlFor="permanentAddress">Permanent Address</Label>
            <Textarea id="permanentAddress" placeholder="Permanent Address" />
          </div>

          {/* Phone Number */}
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="Phone Number" />
          </div>

          {/* Correspondence Address */}
          <div className="col-span-1 md:col-span-2">
            <Label htmlFor="correspondence">Correspondence Address</Label>
            <Textarea id="correspondence" placeholder="Correspondence Address" />
          </div>

          {/* Same as Permanent */}
          <div className="col-span-1 md:col-span-2 flex items-center space-x-2">
            <input type="checkbox" id="sameAddress" className="h-4 w-4" />
            <Label htmlFor="sameAddress">Same As Permanent Address</Label>
          </div>

          {/* Buttons */}
          <div className="col-span-1 w-[50vw]  md:col-span-2 flex flex-col md:flex-row gap-3 mt-4">
            <Button
              type="reset"
              variant="outline"
              className=" w-[30vw] rounded-3xl md:w-auto border-yellow-500 text-yellow-500 hover:bg-yellow-50 font-bold px-6 py-3"
            >
              Reset
            </Button>
            <Button
              type="button"
              onClick={() => adduser("/dashboard")}
              className="w-[120px] rounded-3xl md:w-auto bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-3"
            >
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
