import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { startLoadingStudies } from '../actions/study';

export const Study = () => {

    const dispatch = useDispatch();
    const { Studies } = useSelector(state => state.employee)

    useEffect(() => {
        dispatch( startLoadingStudies() );
    }, [dispatch]);

    return (
        <div className='shadow p-3 mb-5 bg-body rounded my-4'>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Study Name</th>
                  
                    </tr>
                </thead>
                <tbody>
                    {
                        Studies.map( 
                            (study, i) => (
                                <tr key={ study.id}>
                                    <td>{i + 1}</td>
                                    <td>{study.studyName}</td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
