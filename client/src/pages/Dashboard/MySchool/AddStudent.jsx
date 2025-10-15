import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function AddStudent() {
  const [gender, setGender] = useState("male");
  const navigate = useNavigate()
  const studentnavigation = (path) => {
    navigate(path);
  };
   const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    studentname: "",
    fathername: "",
    mothername: "",
    phone: "",
   email: "",
   address:"",
   taxnumber :"",
   registrationnumber:"",
   bloodgroup:"",
   pincodenumber:"",

  });
 const handleDone = async () => {
    try {
      const { studentname, fathername, mothername, phone, email, address,taxnumber ,registrationnumber,bloodgroup, pincodenumber } = formData

      if (!studentname || !fathername|| !email || !phone || ! pincodenumber || !mothername || !address || !taxnumber ||!registrationnumber || !bloodgroup) {
        alert("⚠ Please fill all fields")
        return
      }

      const addstudentdetail = {
        name: `${studentname} ${mothername} ${fathername}`,
        email,
        address,
        phone,
       pincodenumber,
       taxnumber,
       registrationnumber,
       bloodgroup,
      }

      const response = await axios.post("http://localhost:5000/api/addstudent", addstudentdetail)

      if (response.data.success) {
        console.log("✅ add student:", response.data)
        setSuccess(true)
        setTimeout(() => {
        navigate("/dashboard/school") // or "/login"
      }, 1000)
      } else {
        alert("❌ " + response.data.message)
      }
    } catch (error) {
      console.error("Signup Error:", error)
      alert("Something went wrong. Please try again.")
    }
  }
  const isStudentDetailValid =()=>{
    const {studentname,fathername, mothername,taxnumber, registrationnumber, phone,email,bloodgroup,address,pincodenumber } = formData
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
                  <Input
                    placeholder="Enter student name"
                    value={formData.studentname}
                    onChange={(e) =>
                      setFormData({ ...formData, studentname: e.target.value })
                    }
                  />
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
                  <Input 
                   value={formData.fathernamename}
                    onChange={(e) =>
                      setFormData({ ...formData, fathername: e.target.value })
                    }
                  placeholder="Enter father's name" />
                </div>
                <div>
                  <Label>Phone No.</Label>
                  <Input value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                   placeholder="+91 9876543210" />
                </div>

                <div>
                  <Label>Mother's Name</Label>
                  <Input
                   value={formData.mothername}
                    onChange={(e) =>
                      setFormData({ ...formData,mothername: e.target.value })
                    }
                  placeholder="Enter mother's name" />
                </div>
                <div>
                  <Label>Tax Number</Label>
                  <Input
                   value={formData.taxnumber}
                    onChange={(e) =>
                      setFormData({ ...formData, taxnumber: e.target.value })
                    }
                  placeholder="Enter tax number" />
                </div>

                <div className="md:col-span-2">
                  <Label>Address</Label>
                  <Textarea
                   value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                   placeholder="Enter address" />
                </div>

                <div>
                  <Label>Registration No.</Label>
                  <Input
                   value={formData.registrationnumber}
                    onChange={(e) =>
                      setFormData({ ...formData, registrationnumber: e.target.value })
                    }
                  placeholder="Enter registration no." />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input 
                   value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  type="email" placeholder="Enter email" />
                </div>

                <div>
                  <Label>Date of Birth</Label>
                  <Input type="date" />
                </div>
                <div>
                  <Label>Blood Group</Label>
                  <Input 
                   value={formData.bloodgroup}
                    onChange={(e) =>
                      setFormData({ ...formData, bloodgroup: e.target.value })
                    }
                  placeholder="e.g. B+" />
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
                  <Input
                   value={formData.pincodenumber}
                    onChange={(e) =>
                      setFormData({ ...formData, pincodenumber: e.target.value })
                    }
                  placeholder="Enter pincode" />
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
              <Button
                onClick={handleDone}
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-6"
              >
                Save
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
