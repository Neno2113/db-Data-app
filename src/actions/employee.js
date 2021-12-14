import Swal from "sweetalert2";
import { fetchHelper } from "../helpers/fetch";
import { types } from "../types/types";
import { uiCloseForm } from "./ui";



export const startCreatingEmployee = ( Employee ) => {
    return async( dispatch ) => {

        const resp = await fetchHelper('employee', Employee , 'POST');
        const body = await resp.json();


        if( body.ok ){
            dispatch( createEmployee( body.employee ) );
            dispatch( uiCloseForm() );
            Swal.fire('Employee creado',  `Usuario <b>${ body.employee.employeeName }</b> creado.`, 'success');

        } else {
            Swal.fire('Error', body.msg, 'error');
        }

    }
}


const createEmployee = ( Employee ) => ({
    type: types.appCreateEmployee,
    payload: Employee
});


export const startLoadingEmployees = (  ) => {
    return async( dispatch ) => {

        const resp = await fetchHelper('employee');
        const body = await resp.json();

        if( body.ok ){

            
            dispatch( loadEmployees( body.employees ) )
        } else {
            Swal.fire('Error', body.msg, 'error');
        }

    }
}


const loadEmployees = ( employees ) => ({
    type: types.appLoadEmployees,
    payload: employees
})


export const selectEmployee = ( id ) => ({
    type: types.appSelectEmployee,
    payload: id
})


export const startUpdatingEmployee = ( employee ) => {
    return async( dispatch, getState ) => {

        const { activeEmployee } = getState().employee;
        
        try {
            const resp = await fetchHelper(`employee/${ activeEmployee.id }`, employee, 'PUT');
            const body = await resp.json();


            if( body.ok ){
                dispatch( updateEmployee( body.employee ) );
                dispatch( uiCloseForm() );
                Swal.fire(
                    'Employee updated!',
                    `Employee <b>${ body.employee.employeeName} </b> has been updated.`,
                    'success'
                )
            }

        } catch (error) {
            console.log(error);
        }
    }
}


const updateEmployee = ( Employee ) => ({
    type: types.appUpdateEmployee,
    payload: Employee
})


export const startDeletingEmployee = () => {
    return async( dispatch, getState ) => {

        const { activeEmployee } = getState().employee;

        try {
            const resp = await fetchHelper(`employee/${ activeEmployee.id }`, {}, 'DELETE');
            const body = await resp.json();

            if( body.ok ){
                dispatch( deleteEmployee() )
                Swal.fire(
                    'Deleted!',
                    `The employee <b>${ body.employee.employeeName} </b> has been eliminited.`,
                    'success'
                )
            }

        } catch (error) {
            console.log(error);
        }
    }
}


const deleteEmployee = () => ({
    type: types.appDeleteEmployee
})


export const clearSelectedEmployee = () => ({
    type: types.appClearSelectedEmployee
})