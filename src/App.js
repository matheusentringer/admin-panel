import React from 'react'
import Topbar from './components/topbar/Topbar'
import "./app.css"
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import UserList from './pages/userList/UserList'
import User from './pages/user/User'
import NewUser from './pages/newUser/NewUser'

const App = () => {
  return (
    <div>
      <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App