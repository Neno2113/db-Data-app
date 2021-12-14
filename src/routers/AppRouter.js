import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { DashboardRoutes } from './DashboardRoutes';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { useDispatch } from 'react-redux';
import { startChecking } from '../actions/auth';

export const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( startChecking() );
    }, [ dispatch ])

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/auth/*" element={
                        <PublicRoute >
                            <AuthRouter />

                        </PublicRoute>
                    }
                />

                <Route
                    path="/*" element={
                        <PrivateRoute>
                            <DashboardRoutes />

                        </PrivateRoute>
                    }
                />

            </Routes>
            
        </BrowserRouter>
    )
}
