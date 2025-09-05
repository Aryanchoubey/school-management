import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/login'
import SignUp from './pages/Signup/Signup'
import Home from './pages/Dashboard/Home/Home'
import { HomeLayout } from './pages/_layout/HomeLayout'
import Myschool from './pages/Dashboard/MySchool/Myschool'
import AddStudent from './pages/Dashboard/MySchool/AddStudent'
import UserManagement from './pages/Dashboard/UserManagement/UserManagement'
import Academics from './pages/Dashboard/Academics/Academics'
import StudentLeave from './pages/Dashboard/Academics/StudentLeave'
import Sessions from './pages/Dashboard/Home/Sessions'
import NoticeBoard from './pages/Dashboard/Academics/NoticeBoard'
import Enquiry from './pages/Dashboard/Home/Enquiry'
import ClassesPage from './pages/Dashboard/Home/Classes'
import Classes from './pages/Dashboard/Home/Classes'
import Attendance from './pages/Dashboard/Academics/Attendence'
// import AddStudent from './pages/Dashboard/AddStudent/AddStudent'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Home nested routes */}
        <Route path="/dashboard" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path='school' element={<Myschool />} />
          <Route path='branch' element={<Home/>} />
          <Route path='sessions' element={<Sessions/>} />
          <Route path='enquiry' element={<Enquiry/>} />
          <Route path='classes' element={<Classes/>} />

          <Route path='addstudent' element={<AddStudent />} />
          <Route path='editstudent' element={<UserManagement />} />
          <Route path='academics' element={<Academics />} />
          <Route path='studentleave' element={<StudentLeave />} />
          <Route path='noticeboard' element={<NoticeBoard />} />
          <Route path='attendence' element={<Attendance/>} />
        </Route>

        {/* Root route */}
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
  )
}

export default App
