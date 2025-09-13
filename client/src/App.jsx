import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/login';
import SignUp from './pages/Signup/Signup';
import Home from './pages/Dashboard/Home/Home';
import { HomeLayout } from './pages/_layout/HomeLayout';
import Myschool from './pages/Dashboard/MySchool/Myschool';
import AddStudent from './pages/Dashboard/MySchool/AddStudent';
import UserManagement from './pages/Dashboard/UserManagement/UserManagement';
import Academics from './pages/Dashboard/Academics/Academics';
import StudentLeave from './pages/Dashboard/Academics/StudentLeave';
import Sessions from './pages/Dashboard/Home/Sessions';
import NoticeBoard from './pages/Dashboard/Academics/NoticeBoard';
import Enquiry from './pages/Dashboard/Home/Enquiry';
import Classes from './pages/Dashboard/Home/Classes';
import Attendance from './pages/Dashboard/Academics/Attendence';
import Settings from './pages/Dashboard/Settings/Settings';
import Section from './pages/Dashboard/Academics/Section';
import Class from './pages/Dashboard/Academics/Class';
import Subjects from './pages/Dashboard/Academics/Subjects';
import TimeTable from './pages/Dashboard/Academics/TimeTable';
import HomeWork from './pages/Dashboard/Academics/HomeWork';
import SuperAdmin from './pages/Dashboard/SuperAdmin/SuperAdmin';
import Organization from './pages/Dashboard/Organisation/Organisation';
import Profile from './pages/Dashboard/Profile/Profile';
import EditProfile from './pages/Dashboard/Profile/EditPofile';
import StudentFee from './pages/Dashboard/Billings/Fee';
import Fee from './pages/Dashboard/Billings/Fee';
import { Salary } from './pages/Dashboard/Billings/Salary';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Dashboard Nested Routes */}
        <Route path="/dashboard" element={<HomeLayout />}>
          <Route index element={<SuperAdmin />} />
          <Route path="school" element={<Myschool />} />
          <Route path="superadmin" element={<SuperAdmin />} />
          <Route path="branch" element={<Home />} />
          <Route path="sessions" element={<Sessions />} />
          <Route path="enquiry" element={<Enquiry />} />
          <Route path="classes" element={<Classes />} />

          <Route path="addstudent" element={<AddStudent />} />
          <Route path="editstudent" element={<UserManagement />} />
          <Route path="academics" element={<Academics />} />
          <Route path="studentleave" element={<StudentLeave />} />
          <Route path="noticeboard" element={<NoticeBoard />} />
          <Route path="attendence" element={<Attendance />} />
          <Route path="settings" element={<Settings />} />
          <Route path="class" element={<Class />} />
          <Route path="section" element={<Section />} />
          <Route path="subjects" element={<Subjects />} />
          <Route path="timetables" element={<TimeTable />} />
          <Route path="homework" element={<HomeWork />} />
          <Route path="organisation" element={<Organization />} />
          <Route path="fee" element={<Fee />} />
          <Route path="salary" element={<Salary />} />

          {/* Profile and Edit Profile Nested Routes */}
          <Route path="profile" element={<Profile />} />
          <Route path="profile/edit" element={<EditProfile />} />
        </Route>

        {/* Root Route */}
        <Route
          path="/"
          element={
            <div>
              <h1>Welcome to the School Management System</h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
