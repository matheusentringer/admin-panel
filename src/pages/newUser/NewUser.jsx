import React from 'react'
import "./newUser.css"

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label className="newUserLabel">Username</label>
          <input type="text" className="newUserInput" placeholder='john' />
        </div>
        <div className="newUserItem">
          <label className="newUserLabel">Full Name</label>
          <input type="text" className="newUserInput" placeholder='John Doe' />
        </div>
        <div className="newUserItem">
          <label className="newUserLabel">e-mail</label>
          <input type="text" className="newUserInput" placeholder='john@gmail.com' />
        </div>
        <div className="newUserItem">
          <label className="newUserLabel">Password</label>
          <input type="password" className="newUserInput" placeholder='123456' />
        </div>
        <div className="newUserItem">
          <label className="newUserLabel">Phone</label>
          <input type="text" className="newUserInput" placeholder='4002-8922' />
        </div>
        <div className="newUserItem">
          <label className="newUserLabel">Address</label>
          <input type="text" className="newUserInput" placeholder='New Street, California' />
        </div>
        <div className="newUserItem">
          <label className="newUserLabel">Gender</label>
          <div className="newUserGender">
            <input type="radio" className="newUserInput" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" className="newUserInput" id="female" value="female" />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select name="active" id="active" className="newUserSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  )
}

export default NewUser