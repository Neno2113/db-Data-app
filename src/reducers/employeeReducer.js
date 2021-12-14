import { types } from "../types/types";


const initialState = {
    Employees: [],
    Departments: [],
    Studies: [],
    activeEmployee: null
}


export const employeeReducer = ( state = initialState,  action ) => {

    switch ( action.type ) {
        case types.appCreateEmployee:
            return {
                ...state,
                Employees: [...state.Employees, action.payload ]

            }   

        case types.appLoadEmployees:
            return {
                ...state,
                Employees: [ ...action.payload ]

            }    
        
        case types.appSelectEmployee:
            return  {
                ...state,
                activeEmployee: state.Employees.find( Employee => Employee.id === action.payload )
            }
        case types.appClearSelectedEmployee:
            return  {
                ...state,
                activeEmployee: null
            }

        case types.appUpdateEmployee:
            return  {
                ...state,
                Employees: state.Employees.map(
                    Employee => ( Employee.id === action.payload.id ) ? action.payload : Employee
                )
            }
    
        case types.appDeleteEmployee:
            return  {
                ...state,
                Employees: state.Employees.filter(
                    Employee => ( Employee.id !== state.activeEmployee.id )
                ),
                activeEmployee: null
            }
        case types.appLoadDepartment:
            return {
                ...state,
                Departments: [ ...action.payload ]

            }
        case types.appLoadStudies:
            return {
                ...state,
                Studies: [ ...action.payload ]

            }       
        
    

        default:
            return state;
    }

}