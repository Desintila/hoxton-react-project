
import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'


import Header from './components/Header'
import Home from './pages/Homepage'
import Login from './pages/Login'
import SignUp from './pages/Signup'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(resp => resp.json())
      .then(users => setUsers(users))
  }, [])

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route index element={<Navigate replace to='/home' />} />
        <Route path='home' element={<Home />} />
        <Route path='/signup' element={<SignUp users={users} setUsers={setUsers} />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
