import React from 'react'
import Topbar from './components/topbar/Topbar'
import "./app.css"
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/Home'

const App = () => {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar/>
        <Home />
      </div>
    </div>
  )
}

export default App