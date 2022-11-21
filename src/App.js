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

const App = () => {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar/>
        <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App