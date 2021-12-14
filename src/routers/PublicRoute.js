import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {

    const { name } = useSelector(state => state.auth);

    const isLoggeIn = !!name;

    return isLoggeIn
        ? <Navigate to="/" />
        : children

}
