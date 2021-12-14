import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'

export const AuthRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={ <LoginScreen /> } ></Route>
            </Routes>
        </div>
    )
}
