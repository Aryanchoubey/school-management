import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useNavigate } from "react-router-dom"

export default function AddStudent() {
  const [gender, setGender] = useState("male")
  const navigate = useNavigate()
  const studentnavigation = (path) => {
navigate(path)
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      

      {/* Main Form */}
      <main className="flex-1 p-6">
        <Card className="max-w-5xl mx-auto">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Profile Upload Section */}
              <div className="flex flex-col items-center md:w-1/3">
                <img
                  src="https://i.pravatar.cc/120?u=student"
                  alt="profile"
                  className="w-28 h-28 rounded-full object-cover"
                />
                 <div className="col-span-2 flex flex-col gap-2">
              <Label>Upload Photo</Label>
              <Input type="file" />
            </div>
              </div>

              {/* Form Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                <div>
                  <Label>Student Name</Label>
                  <Input placeholder="Enter student name" />
                </div>
                <div>
                  <Label>District</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select district" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ranchi">Ranchi</SelectItem>
                      <SelectItem value="patna">Patna</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Father's Name</Label>
                  <Input placeholder="Enter father's name" />
                </div>
                <div>
                  <Label>Phone No.</Label>
                  <Input placeholder="+91 9876543210" />
                </div>

                <div>
                  <Label>Mother's Name</Label>
                  <Input placeholder="Enter mother's name" />
                </div>
                <div>
                  <Label>Tax Number</Label>
                  <Input placeholder="Enter tax number" />
                </div>

                <div className="md:col-span-2">
                  <Label>Address</Label>
                  <Textarea placeholder="Enter address" />
                </div>

                <div>
                  <Label>Registration No.</Label>
                  <Input placeholder="Enter registration no." />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input type="email" placeholder="Enter email" />
                </div>

                <div>
                  <Label>Date of Birth</Label>
                  <Input type="date" />
                </div>
                <div>
                  <Label>Blood Group</Label>
                  <Input placeholder="e.g. B+" />
                </div>

                <div className="md:col-span-2">
                  <Label>Gender</Label>
                  <RadioGroup
                    defaultValue="male"
                    onValueChange={setGender}
                    className="flex gap-6 mt-2"
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Other</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label>Pincode</Label>
                  <Input placeholder="Enter pincode" />
                </div>
                <div>
                  <Label>State</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="jharkhand">Jharkhand</SelectItem>
                      <SelectItem value="bihar">Bihar</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="md:col-span-2">
                  <Label>Any Abilities</Label>
                  <Input placeholder="Enter abilities if any" />
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end mt-6">
              <Button  onClick={() => studentnavigation ('/dashboard/school')} className="bg-yellow-400 hover:bg-yellow-500 text-black px-6">
                Save
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
