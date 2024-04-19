import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddUserForm from './components/AddUserForm'
import UserList from './components/UserList'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'

function App() {

  const navigate = useNavigate()

  return (
    <>
    <h1>M E R N - manadżer więzienia</h1>
      <nav>
        <ul>
          <li>
            <Link to="users">Show Users list</Link>
          </li>
          <li>
            <button onClick={() => navigate("/add-user")}>Add a new user</button>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/users" element={<UserList />}/>
        <Route path="/add-user" element={<AddUserForm />}/>
        <Route path="/" element={<h1>Strona!</h1>}/>
      </Routes>
    </>
  )
}

export default App
