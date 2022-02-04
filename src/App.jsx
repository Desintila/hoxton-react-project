
import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Chapters from './components/Chapters'
import Footer from './components/Footer'


import Header from './components/Header'
import BookDetails from './pages/BookDetails'

import Category from './pages/Category'
import Home from './pages/Homepage'
import Library from './pages/Library'
import Login from './pages/Login'
import SignUp from './pages/Signup'

function App() {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState('')
  const [books, setBooks] = useState([])
  const [book, setBook] = useState(null)
  const [search, setSearch] = useState('')


  useEffect(() => {
    fetch('http://localhost:3000/users?_embed=comments')
      .then(resp => resp.json())
      .then(users => setUsers(users))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/books?_embed=comments')
      .then(resp => resp.json()
        .then(books => setBooks(books)))
  }, [])


  return (
    <div className="App">
      <Header user={user} setUser={setUser} setSearch={setSearch} />

      <Routes>
        <Route index element={<Navigate replace to='/home' />} />
        <Route path='home' element={<Home books={books} search={search} />} />
        <Route path='/signup' element={<SignUp users={users} setUsers={setUsers} />} />
        <Route path='/login' element={<Login setUser={setUser} />} />
        <Route path='/home/:id' element={<BookDetails users={users} user={user} setUser={setUser} book={book} setBook={setBook} books={books} />} />
        <Route path='/library' element={<Library user={user} />} />
        <Route path='/category' element={<Category books={books} />} />
        <Route path='/chapters' element={< Chapters book={book} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
