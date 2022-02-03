
import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'


import Header from './components/Header'
import BookDetails from './pages/BookDetails'
import Home from './pages/Homepage'
import Library from './pages/Library'
import Login from './pages/Login'
import SignUp from './pages/Signup'

function App() {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState('')
  const [books, setBooks] = useState([])
  const [book, setBook] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(resp => resp.json())
      .then(users => setUsers(users))
  }, [])

  return (
    <div className="App">
      <Header user={user} />

      <Routes>
        <Route index element={<Navigate replace to='/home' />} />
        <Route path='home' element={<Home books={books} setBooks={setBooks} />} />
        <Route path='/signup' element={<SignUp users={users} setUsers={setUsers} />} />
        <Route path='/login' element={<Login user={user} setUser={setUser} />} />
        <Route path='/home/:id' element={<BookDetails user={user} setUser={setUser} book={book} setBook={setBook} />} />
        <Route path='/library' element={<Library user={user} />} />
      </Routes>
    </div>
  )
}

export default App
