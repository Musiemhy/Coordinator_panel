export const userColumns = [
    { field: "id",headerName: "ID", width: 70},
    { field: "profile",headerName: "PROFILE", width: 130,
        renderCell: (params) => {
            return(
                <div>
                    <img className="cellImg" src={params.row.img} alt="avatar"/>
                </div>
            );
        },
    },
    { field: "firstName",headerName: "FIRST NAME", width: 130},
    { field: "middleName",headerName: "MIDDLE NAME", width: 130},
    { field: "age",headerName: "AGE", width: 70},
    { field: "email",headerName: "EMAIL", width: 130},
    { field: "accountType",headerName: "ACCOUNT TYPE", width: 130},
    
]
export const userRows = [
        { id: 1, middleName: 'Jon', firstName: 'Snow', age: 35 },
        { id: 2, middleName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, middleName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, middleName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, middleName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, middleName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, middleName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, middleName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, middleName: 'Roxie', firstName: 'Harvey', age: 65 },
]