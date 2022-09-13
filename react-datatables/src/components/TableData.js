import React from 'react';
import DataTable from 'react-data-table-component';

const datalist = [
    {
        "name": "HAHAHA",
        "age": 11,
        "salary": 110.4,
        "deprartment": "namp",
        "city": "jakj"
    },
    {
        "name": "sam",
        "age": 15,
        "salary": 12.4,
        "deprartment": "AHA",
        "city": "AHA"
    },
    {
        "name": "sam",
        "age": 15,
        "salary": 12.4,
        "deprartment": "AHA",
        "city": "AHA"
    },
    {
        "name": "sam",
        "age": 15,
        "salary": 12.4,
        "deprartment": "AHA",
        "city": "AHA"
    },
    {
        "name": "sam",
        "age": 15,
        "salary": 12.4,
        "deprartment": "AHA",
        "city": "AHA"
    },
    {
        "name": "sam",
        "age": 15,
        "salary": 12.4,
        "deprartment": "AHA",
        "city": "AHA"
    },
    {
        "name": "sam",
        "age": 15,
        "salary": 12.4,
        "deprartment": "AHA",
        "city": "AHA"
    },
    {
        "name": "sam",
        "age": 15,
        "salary": 12.4,
        "deprartment": "AHA",
        "city": "AHA"
    },
    {
        "name": "sam",
        "age": 15,
        "salary": 12.4,
        "deprartment": "AHA",
        "city": "AHA"
    },
    {
        "name": "sam",
        "age": 15,
        "salary": 12.4,
        "deprartment": "AHA",
        "city": "AHA"
    },
    {
        "name": "sam",
        "age": 15,
        "salary": 12.4,
        "deprartment": "AHA",
        "city": "AHA"
    },
    {
        "name": "sam",
        "age": 15,
        "salary": 12.4,
        "deprartment": "AHA",
        "city": "AHA"
    },
    {
        "name": "sam",
        "age": 15,
        "salary": 12.4,
        "deprartment": "AHA",
        "city": "AHA"
    },
    {
        "name": "sam",
        "age": 15,
        "salary": 12.4,
        "deprartment": "AHA",
        "city": "AHA"
    },
    {
        "name": "sam",
        "age": 15,
        "salary": 12.4,
        "deprartment": "AHA",
        "city": "AHA"
    },
    {
        "name": "sam",
        "age": 15,
        "salary": 12.4,
        "deprartment": "AHA",
        "city": "AHA"
    },
    {
        "name": "sam",
        "age": 15,
        "salary": 12.4,
        "deprartment": "AHA",
        "city": "AHA"
    },
    {
        "name": "sam",
        "age": 15,
        "salary": 12.4,
        "deprartment": "AHA",
        "city": "AHA"
    },
    {
        "name": "sam",
        "age": 15,
        "salary": 12.4,
        "deprartment": "AHA",
        "city": "AHA"
    },
    {
        "name": "sam",
        "age": 15,
        "salary": 12.4,
        "deprartment": "AHA",
        "city": "AHA"
    },
    {
        "name": "sam",
        "age": 15,
        "salary": 12.4,
        "deprartment": "AHA",
        "city": "AHA"
    },
    {
        "name": "sam",
        "age": 15,
        "salary": 12.4,
        "deprartment": "AHA",
        "city": "AHA"
    },
    {
        "name": "sam",
        "age": 15,
        "salary": 12.4,
        "deprartment": "AHA",
        "city": "AHA"
    },
    {
        "name": "sam",
        "age": 15,
        "salary": 12.4,
        "deprartment": "AHA",
        "city": "AHA"
    },
    {
        "name": "sam",
        "age": 15,
        "salary": 12.4,
        "deprartment": "AHA",
        "city": "AHA"
    },
    {
        "name": "sam",
        "age": 15,
        "salary": 12.4,
        "deprartment": "AHA",
        "city": "AHA"
    },
    {
        "name": "sam",
        "age": 15,
        "salary": 12.4,
        "deprartment": "AHA",
        "city": "AHA"
    },
    {
        "name": "sam",
        "age": 15,
        "salary": 12.4,
        "deprartment": "AHA",
        "city": "AHA"
    },
    {
        "name": "sam",
        "age": 15,
        "salary": 12.4,
        "deprartment": "AHA",
        "city": "AHA"
    },
    {
        "name": "sam",
        "age": 15,
        "salary": 12.4,
        "deprartment": "AHA",
        "city": "AHA"
    },
    {
        "name": "sam",
        "age": 15,
        "salary": 12.4,
        "deprartment": "AHA",
        "city": "AHA"
    },
    {
        "name": "sam",
        "age": 15,
        "salary": 12.4,
        "deprartment": "AHA",
        "city": "AHA"
    },
    {
        "name": "sam",
        "age": 15,
        "salary": 12.4,
        "deprartment": "AHA",
        "city": "AHA"
    },
    {
        "name": "sam",
        "age": 15,
        "salary": 12.4,
        "deprartment": "AHA",
        "city": "AHA"
    },
    {
        "name": "sam",
        "age": 15,
        "salary": 12.4,
        "deprartment": "AHA",
        "city": "AHA"
    }
]
function TableData() {


    const columns = [
        {
            name: "Emp name",
            selector: (row) => row.name,
            sortable: true
        },
        {
            name: "Age",
            selector: (row) => row.age,
            sortable: true
        },
        {
            name: "Salary",
            selector: (row) => row.salary,
            sortable: true
        },
        {
            name: "Department",
            selector: (row) => row.deprartment,
            sortable: true
        },
        {
            name: "City",
            selector: (row) => row.city,
            sortable: true
        },
        {
            name: "Actions",
            cell: (row) => <><button classname='btn btn-success'>Edit</button> <button classname='btn btn-danger'>Delete</button></>
        }
    ]


    // return <>
    //     <table classname='table table-hover'>
    //         <thead>
    //             <tr>
    //                 <th>name</th>
    //                 <th>Age</th>
    //                 <th>Salary</th>
    //                 <th>Department</th>
    //                 <th>City</th>
    //                 <th>Actions</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             {
    //                 datalist.map(row =>
    //                     <tr key={Math.random()}>
    //                         <td>{row.name}</td>
    //                         <td>{row.age}</td>
    //                         <td>{row.salary}</td>
    //                         <td>{row.deprartment}</td>
    //                         <td>{row.city}</td>
    //                         <td><button>edit</button><button>Delete</button></td>
    //                     </tr>
    //                 )
    //             }
    //         </tbody>
    //     </table>
    // </>
    return <>
        <DataTable title="Data List" columns={columns} data={datalist}
            pagination
            fixedHeader
            fixedHeaderScrollHeight='390px'
            selectableRows
            selectableRowsHighlight
            highlightOnHover
            actions={
                <button classname='btn btn-sm btn-info'>Export</button>
            }
            subHeader
            subHeaderComponent={
                <input type="text" placeholder="Search here" className='w-25 form-control' />
            }
            subHeaderAlign="center"

        />
    </>
}

export default TableData