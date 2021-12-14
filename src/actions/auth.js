import { types } from "../types/types";




export const login = ( user ) => {

    localStorage.setItem('name', user.name )
    return {
        type: types.authLogin,
        payload: user
    }
    
}

export const startChecking = () => {
    return ( dispatch ) => {
        const name = localStorage.getItem('name');
        if( name && name !== null ){
            dispatch( login({
                name: name
            }))
        } 

    }
}

export const logout = () => {
    localStorage.clear();
    return {
        type: types.authLogout,
    }
};

