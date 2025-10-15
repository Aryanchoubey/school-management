import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from 'dotenv';
dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
// import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected!"))
  .catch(err => console.log(err));

// ------------------ User Schema ------------------
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  plan: String,
  paymentMethod: String,
});

const User = mongoose.model("User", userSchema);

// ------------------ Student Schema ------------------
const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  fathername: String,
  mothername: String,
  phone: String,
  registrationnumber: String,
  taxnumber: String,
  pincodenumber: String,
  address: String,
  bloodgroup: String,
});

const Student = mongoose.model("Student", studentSchema);


// ------------------ Routes ------------------

// Test route
app.get("/", (req, res) => res.send("Server is ready"));

// Signup API
app.post("/api/signup", async (req, res) => {
  try {
    const { name, email, password, plan, paymentMethod } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(409).json({ success: false, message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      plan,
      paymentMethod,
    });

    await newUser.save();
    res.status(201).json({ success: true, message: "User registered successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Login API
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ success: false, message: "Incorrect password" });

    res.json({ success: true, message: "Login successful", token: "fake-jwt-token" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Add Student API
app.post("/api/addstudent", async (req, res) => {
  try {
    const { name, email, fathername, mothername, phone, registrationnumber, taxnumber, pincodenumber, address, bloodgroup } = req.body;

    // Check if student exists in STUDENT collection only
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(409).json({ success: false, message: "Student already exists" });
    }

    const newStudent = new Student({
      name,
      email,
      fathername,
      mothername,
      phone,
      registrationnumber,
      taxnumber,
      pincodenumber,
      address,
      bloodgroup,
    });

    await newStudent.save();
    res.status(201).json({ success: true, message: "Student added successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Get all students
// Backend: fetch all students
app.get("/api/students", async (req, res) => {
  try {
    const students = await Student.find(); // fetch from Student collection
    res.json({ success: true, students });
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});
// Delete student by ID
app.delete("/api/students/:id", async (req, res) => {
  try {
    const studentId = req.params.id;

    const deletedStudent = await Student.findByIdAndDelete(studentId);

    if (!deletedStudent) {
      return res.status(404).json({ success: false, message: "Student not found" });
    }

    res.json({ success: true, message: "Student deleted successfully" });
  } catch (error) {
    console.error("Error deleting student:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});




// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`🚀 Server running at http://localhost:${port}`));
