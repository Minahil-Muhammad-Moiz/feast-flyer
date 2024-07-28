import React from 'react'
import Home from './Screens/Home'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './Screens/Login'
const App = () => {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
    </Router>
  )
}

export default App
