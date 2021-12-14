import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Department } from '../components/Department';
import { Employee } from '../components/Employee';
import { Study } from '../components/Study';
import { NavBar } from '../components/ui/NavBar';


export const DashboardRoutes = () => {
    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-center">
                <div className='' style={{ width: '80%'}}>
                    <NavBar />
            
                    <Routes>
                        <Route path="/" element={ <Employee /> }></Route>
                        <Route path="/employee" element={ <Employee /> }></Route>
                        <Route  path="/study" element={ <Study /> }></Route>
                        <Route  path="/department" element={ <Department /> }></Route>
                    </Routes>
                </div>
            </div>
        </div>
    )
}
