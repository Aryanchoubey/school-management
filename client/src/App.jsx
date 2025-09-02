import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/login'
import SignUp from './pages/Signup/Signup'
import Home from './pages/Dashboard/Home/Home'
import { HomeLayout } from './pages/_layout/HomeLayout'
import Myschool from './pages/Dashboard/MySchool/Myschool'
import AddStudent from './pages/Dashboard/MySchool/AddStudent'
import UserManagement from './pages/Dashboard/UserManagement/UserManagement'
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
          <Route path='addstudent' element={<AddStudent />} />
          <Route path='editstudent' element={<UserManagement />} />
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
