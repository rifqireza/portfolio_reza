import "./App.css"
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import IndexLayout from "./page/layout/IndexLayout"
import Dashboard from "./page/layout/content/Dahsboard"
import Aritmatika from "./page/layout/content/matriks/aritmatika/Aritmatika"
import Login from "./page/auth/Login"
import Register from "./page/auth/Register"
import CreateUser from "./page/layout/content/crud/CreateUser"
console.log('sini');

function App() {
  return (
    <BrowserRouter basename='/portfolio_reza'>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/web" element={<Navigate replace to="/web/dashboard" />} />
        <Route path="/web" element={<IndexLayout />}>
          <Route path="dashboard" element={<Dashboard name="Dashboard" />} />
          <Route path="matrix/aritmethics" element={<Aritmatika />} />
          <Route path="users/create" element={<CreateUser />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<>not found</>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
