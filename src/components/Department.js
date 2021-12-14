import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { startLoadingDepartments } from '../actions/department';

export const Department = () => {

    const dispatch = useDispatch();
    const { Departments } = useSelector(state => state.employee)

    useEffect(() => {
        dispatch( startLoadingDepartments() );
    }, [dispatch]);


    return (
        <div className='shadow p-3 mb-5 bg-body rounded my-4'>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Dapartment Name</th>
                  
                    </tr>
                </thead>
                <tbody>
                    {
                        Departments.map( 
                            (depa, i) => (
                                <tr key={ depa.id}>
                                    <td>{i + 1}</td>
                                    <td>{depa.deparmentName}</td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
