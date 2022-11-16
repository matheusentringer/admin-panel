import React from 'react'
import Topbar from './components/topbar/Topbar'
import "./app.css"
import Sidebar from './components/sidebar/Sidebar'

const App = () => {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar/>
        <div className='others'>other pages</div>
      </div>
    </div>
  )
}

export default App