import { useState } from "react";
import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import {Link} from "react-router-dom";
import { userColumns, userRows} from "./userdata";


const Datatable = () => {
  const [data,setData] = useState(userRows)
  
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return(
          <div className="cellAction">
            <Link to="/single" style={{ textDecoration: "none"}}>
              <div className="viewButton">View</div>
            </Link>
            <Link to="" style={{ textDecoration: "none"}}>
              <div className="deleteButton" onClick={ ()=> handleDelete(params.row.id)}>Delete</div>
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
        <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable