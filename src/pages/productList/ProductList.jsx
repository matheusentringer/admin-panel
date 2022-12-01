import React, { useState } from 'react'
import "./productList.css"
import { DataGrid } from '@mui/x-data-grid';
import { productRows } from '../../dummyData';
import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import { Link } from "react-router-dom"

const ProductList = () => {

  const [data, setData] = useState(productRows)

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'product', headerName: 'Product', width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImage" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        )
    } },
    { field: 'stock', headerName: 'Stock', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`}>
              <EditOutlined className="productListEdit" />
            </Link>
            <DeleteOutline className="productListDelete" onClick={()=>handleDelete(params.row.id)} />
          </>
        )
      }
    },
  ];

  return (
    <div className="ProductList">
      <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
    </div>
  )
}

export default ProductList