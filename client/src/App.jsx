import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/login'
import SignUp from './pages/Signup/Signup'
import Home from './pages/Dashboard/Home/Home'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
           <Route path='/signup' element={<SignUp />} />
           <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
