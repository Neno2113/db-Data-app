import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2';
import { selectEmployee, startDeletingEmployee, startLoadingEmployees } from '../actions/employee';
import { uiOpenForm } from '../actions/ui';

export const EmployeeList = () => {

    const dispatch = useDispatch();
    const { Employees } = useSelector(state => state.employee)
    
    useEffect(() => {
        dispatch( startLoadingEmployees() );
    }, [dispatch]);



    const handleDelete = ( id ) => {
        dispatch( selectEmployee( id ))
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                
                dispatch( startDeletingEmployee() );
            }
          })
    }


    const handleEdit = (id) => {
        dispatch( selectEmployee( id ));
        dispatch( uiOpenForm() );
    }

    return (
        <div className='shadow p-3 mb-5 bg-body rounded'>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Last </th>
                        <th scope="col">ID</th>
                        <th scope="col">Sexo</th>
                        <th scope="col">Departamento</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Employees.map( 
                            (employee, i) => (
                                <tr key={ employee.id}>
                                    <td>{i + 1}</td>
                                    <td>{employee.employeeName}</td>
                                    <td>{employee.employeeLastName}</td>
                                    <td>{employee.idNumber}</td>
                                    <td>{
                                            (employee.sexo)
                                            ? ( <span>Female</span>)
                                            : ( <span>Male</span>)
                                            
                                        }
                                    
                                    </td>
                                    <td>{employee.Department.deparmentName}</td>
                                    <td>
                                    <div className='d-grid gap-2 d-md-block'>
                                        <button 
                                            className='btn btn-warning mx-1'
                                            onClick={ () => handleEdit( employee.id ) }
                                        >
                                            <i className="far fa-edit"></i></button>
                                        <button 
                                            className='btn btn-danger mx-1'
                                            onClick={ () => handleDelete( employee.id ) }
                                        >
                                            <i className="far fa-trash-alt"></i></button>
                                    </div>
                                    </td>

                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
