import Swal from "sweetalert2";
import { fetchHelper } from "../helpers/fetch";
import { types } from "../types/types";



export const startLoadingStudies = (  ) => {
    return async( dispatch ) => {

        const resp = await fetchHelper('study');
        const body = await resp.json();

        if( body.ok ){

            
            dispatch( loadStudies( body.Studies ) )
        } else {
            Swal.fire('Error', body.msg, 'error');
        }

    }
}


const loadStudies = ( studies ) => ({
    type: types.appLoadStudies,
    payload: studies
})