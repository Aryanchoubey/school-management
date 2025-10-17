import { useState, useEffect } from "react";
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
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export default function AddStudent() {
  const navigate = useNavigate();
  const location = useLocation();
  const editingStudent = location.state?.studentData;

  const [gender, setGender] = useState("male");
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    studentname: "",
    fathername: "",
    mothername: "",
    phone: "",
    email: "",
    address: "",
    taxnumber: "",
    registrationnumber: "",
    bloodgroup: "",
    pincodenumber: "",
  });

  // Prefill when editing. Be flexible with incoming field names:
  useEffect(() => {
    if (editingStudent) {
      console.log("Received editingStudent:", editingStudent);
      // API might return: { name, fathername, mothername, phone, email, address, ... }
      // or it might use studentname. Handle both.
      const nameFromApi = editingStudent.studentname || editingStudent.name || "";
      // If name contains full name, try split (best-effort)
      const nameParts = nameFromApi.split(" ");
      const primaryName = nameParts.length ? nameParts[0] : nameFromApi;

      setFormData({
        studentname: primaryName || "",
        fathername: editingStudent.fathername || editingStudent.father || "",
        mothername: editingStudent.mothername || editingStudent.mother || "",
        phone: editingStudent.phone || editingStudent.contact || "",
        email: editingStudent.email || "",
        address: editingStudent.address || "",
        taxnumber: editingStudent.taxnumber || editingStudent.tax_number || "",
        registrationnumber: editingStudent.registrationnumber || editingStudent.registrationNo || editingStudent.registration || "",
        bloodgroup: editingStudent.bloodgroup || editingStudent.blood_group || "",
        pincodenumber: editingStudent.pincodenumber || editingStudent.pincode || editingStudent.pin || "",
      });

      // If the API contains gender, set it
      if (editingStudent.gender) setGender(editingStudent.gender);
    } else {
      // If not editing, try to restore from localStorage if present
      const saved = localStorage.getItem("formData");
      if (saved) setFormData(JSON.parse(saved));
    }
  }, [editingStudent]);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDone = async () => {
    try {
      const {
        studentname,
        fathername,
        mothername,
        phone,
        email,
        address,
        taxnumber,
        registrationnumber,
        bloodgroup,
        pincodenumber,
      } = formData;

      if (
        !studentname ||
        !fathername ||
        !mothername ||
        !phone ||
        !email ||
        !address ||
        !taxnumber ||
        !registrationnumber ||
        !bloodgroup ||
        !pincodenumber
      ) {
        alert("⚠ Please fill all fields");
        return;
      }

      // Map to backend expectation: backend expects `name` maybe
      const payload = {
        name: studentname, // keep simple; backend can combine if needed
        fathername,
        mothername,
        phone,
        email,
        address,
        taxnumber,
        registrationnumber,
        bloodgroup,
        pincodenumber,
        gender,
      };

      let response;
      if (editingStudent?._id) {
        // Use PUT to update
        response = await axios.put(
          `https://school-management-s6lr.onrender.com/api/students/${editingStudent._id}`,
          payload
        );
      } else {
        // Use POST to add (adjust endpoint to your actual add route)
        response = await axios.post(
          "https://school-management-s6lr.onrender.com/api/addstudent",
          payload
        );
      }

      if (response.data?.success) {
        alert(editingStudent ? "✅ Student updated" : "✅ Student added");
        setSuccess(true);
        navigate("/dashboard/school");
      } else {
        console.error("Server responded with:", response.data);
        alert("❌ " + (response.data?.message || "Unknown server error"));
      }
    } catch (error) {
      console.error("Error saving student:", error);
      alert("Something went wrong. Check console.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="flex-1 p-6">
        <Card className="max-w-5xl mx-auto">
          <CardContent className="p-6">
            {/* {editingStudent && (
              <div className="mb-4 text-sm text-blue-700">
                <strong>{editingStudent.name || editingStudent.studentname}</strong>
              </div>
            )} */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col items-center md:w-1/3">
                <img src="https://i.pravatar.cc/120?u=student" alt="profile" className="w-28 h-28 rounded-full object-cover" />
                <div className="col-span-2 flex flex-col gap-2 mt-3">
                  <Label>Upload Photo</Label>
                  <Input type="file" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                <div>
                  <Label>Student Name</Label>
                  <Input name="studentname" value={formData.studentname} onChange={handleChange} placeholder="Enter student name" />
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
                  <Input name="fathername" value={formData.fathername} onChange={handleChange} placeholder="Enter father's name" />
                </div>

                <div>
                  <Label>Phone No.</Label>
                  <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 9876543210" />
                </div>

                <div>
                  <Label>Mother's Name</Label>
                  <Input name="mothername" value={formData.mothername} onChange={handleChange} placeholder="Enter mother's name" />
                </div>

                <div>
                  <Label>Tax Number</Label>
                  <Input name="taxnumber" value={formData.taxnumber} onChange={handleChange} placeholder="Enter tax number" />
                </div>

                <div className="md:col-span-2">
                  <Label>Address</Label>
                  <Textarea name="address" value={formData.address} onChange={handleChange} placeholder="Enter address" />
                </div>

                <div>
                  <Label>Registration No.</Label>
                  <Input name="registrationnumber" value={formData.registrationnumber} onChange={handleChange} placeholder="Enter registration no." />
                </div>

                <div>
                  <Label>Email</Label>
                  <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter email" />
                </div>

                <div>
                  <Label>Date of Birth</Label>
                  <Input type="date" />
                </div>

                <div>
                  <Label>Blood Group</Label>
                  <Input name="bloodgroup" value={formData.bloodgroup} onChange={handleChange} placeholder="e.g. B+" />
                </div>

                <div className="md:col-span-2">
                  <Label>Gender</Label>
                  <RadioGroup defaultValue={gender} onValueChange={setGender} className="flex gap-6 mt-2">
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
                  <Input name="pincodenumber" value={formData.pincodenumber} onChange={handleChange} placeholder="Enter pincode" />
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

            <div className="flex justify-end mt-6">
              <Button onClick={handleDone} className="bg-yellow-400 hover:bg-yellow-500 text-black px-6">
                {editingStudent ? "Update Student" : "Save Student"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
