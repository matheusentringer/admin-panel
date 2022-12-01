import React, { useState } from 'react'
import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from '../../dummyData';
import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import { Link } from "react-router-dom"

const UserList = () => {

  const [data, setData] = useState(userRows)

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'user', headerName: 'User', width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImage" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        )
    } },
    { field: 'email', headerName: 'e-mail', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
              <EditOutlined className="userListEdit" />
            </Link>
            <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)} />
          </>
        )
      }
    },
  ];

  return (
    <div className="userList">
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  )
}

export default UserList