import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearSelectedEmployee } from '../actions/employee'
import { uiOpenForm, uiCloseForm } from '../actions/ui'
import { EmployeeForm } from './EmployeeForm'
import { EmployeeList } from './EmployeeList'
import { NavBar } from './ui/NavBar'

export const Employee = () => {

    const dispatch = useDispatch();
    const { formShow } = useSelector(state => state.ui)

    const handleShowForm = () => {
        dispatch( uiOpenForm() );
        dispatch( clearSelectedEmployee() );
    }

    const handleCloseForm = () => {
        dispatch( uiCloseForm() );
    }
    
    return (
        <div className="container">
                    {/* <NavBar /> */}
                {
                    (formShow)
                    ? (
                        <div className="d-grid  d-md-flex d-sm-flex  justify-content-md-end my-2 ">
                            <button 
                                className="btn btn-danger"
                                onClick= { handleCloseForm }    
                            >
                            <i className="fa-solid fa-left-long mx-1"></i>
                            Volver
                            
                            </button>
                        </div>
                    )
                    : (
                        <div className="d-grid gap-2 d-md-flex d-sm-flex  justify-content-md-start my-2 ">
                            <button 
                                className="btn btn-primary"
                                onClick= { handleShowForm }    
                            >
                            <i className="fa-solid fa-circle-plus mx-1"></i> 
                            Crear
                            
                            </button>
                        </div>
                    )
                }
                {
                    (formShow)
                    ? ( <EmployeeForm /> )
                    : ( <EmployeeList /> )
                }
                    </div>
             
            
        )

}
