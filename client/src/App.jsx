import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/login'
import SignUp from './pages/Signup/Signup'
import Home from './pages/Dashboard/Home/Home'
import { HomeLayout } from './pages/_layout/HomeLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Home nested routes */}
        <Route path="/home" element={<HomeLayout />}>
          <Route index element={<Home />} />
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
