import React from 'react'
import { Router, Routes, Route, Link } from 'react-router'
import Navbar from './Components/Navbar'
import Students from './Components/Students'
import Admin from './Components/Admin'
import Edit from './Components/Edit'
import ProtectedRoute from './Components/ProtectedRoutes'
import Admindash from './Components/Admindash'

const App = () => {
  return (

    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/proxy-image.jpeg')", width: "100%", height: "100%" }}>
      <Navbar />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Students />} />
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/admindash"
            element={
              <ProtectedRoute>
                <Admindash />
              </ProtectedRoute>
            }
          />
          <Route path="/edit/:id" element={
            <ProtectedRoute>
              <Edit />
            </ProtectedRoute>}
          />
        </Routes>
      </div>

    </div>

  )
}

export default App
