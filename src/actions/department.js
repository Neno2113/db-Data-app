import Swal from "sweetalert2";
import { fetchHelper } from "../helpers/fetch";
import { types } from "../types/types";



export const startLoadingDepartments = (  ) => {
    return async( dispatch ) => {

        const resp = await fetchHelper('department');
        const body = await resp.json();

        if( body.ok ){

            
            dispatch( loadDepartments( body.departments ) )
        } else {
            Swal.fire('Error', body.msg, 'error');
        }

    }
}


const loadDepartments = ( departments ) => ({
    type: types.appLoadDepartment,
    payload: departments
})