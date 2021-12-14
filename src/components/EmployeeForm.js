import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector,  } from 'react-redux';
import NumberFormat from 'react-number-format';

import { startCreatingEmployee, startUpdatingEmployee } from '../actions/employee';
import { startLoadingDepartments } from '../actions/department';
import { startLoadingStudies } from '../actions/study';

export const EmployeeForm = () => {

    const dispatch = useDispatch();
    const { activeEmployee, Departments, Studies } = useSelector(state => state.employee)
    const [msgError, setmsgError] = useState(null);

    useEffect(() => {
        dispatch( startLoadingDepartments() );
    }, [dispatch]);

    useEffect(() => {
        dispatch( startLoadingStudies() );
    }, [dispatch]);


   

    const initState = {
        employeeName: '',
        employeeLastName: '',
        departmentId: '',
        studyId: '',
        sexo: '',
        idNumber: '',
        address: '',
        homePhone: '',
        mobilePhone: '',
        baseSalary: '',
        discount: '',
        netSalary:''
    }
    const [formValues, setformValues] = useState( initState );
    
    const { employeeName, employeeLastName, departmentId, studyId, sexo, idNumber,
        address, homePhone, mobilePhone, baseSalary, discount, netSalary
    } = formValues;

    useEffect(() => {
        if( activeEmployee ){
            activeEmployee.baseSalary = activeEmployee.baseSalary.toString();
            activeEmployee.discount = activeEmployee.discount.toString();
            activeEmployee.netSalary = activeEmployee.netSalary.toString();

            setformValues( activeEmployee )
        } 
    }, [activeEmployee, setformValues])




    const handleInputChange = ({target}) => {
        setformValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const handleCheckChange = ({target}) => {
        setformValues({
            ...formValues,
            [target.name]: target.id
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if( formValid() ){
            if( activeEmployee ){
                //sanitize all mask 
                formValues.idNumber = idNumber.replace(/[-/\\^$*+?.()|[\]{}]/g, '').trim();
                formValues.homePhone = homePhone.replace(/[-/\\^$*+?.()|[\]{}]/g, '').trim();
                formValues.mobilePhone = mobilePhone.replace(/[-/\\^$*+?.()|[\]{}]/g, '').trim();
                formValues.netSalary = netSalary.replace(/[-/\\^$*+?,.()|[\]{}]/g, '').trim();
                formValues.discount = discount.replace(/[-/\\^$*+?,.()|[\]{}]/g, '').trim();
                formValues.baseSalary = baseSalary.replace(/[-/\\^$*+?,.()|[\]{}]/g, '').trim();
                dispatch( startUpdatingEmployee( formValues ));
            } else {
                //sanitize all mask 
                formValues.idNumber = idNumber.replace(/[-/\\^$*+?.()|[\]{}]/g, '').trim();
                formValues.homePhone = homePhone.replace(/[-/\\^$*+?.()|[\]{}]/g, '').trim();
                formValues.mobilePhone = mobilePhone.replace(/[-/\\^$*+?.()|[\]{}]/g, '').trim();
                formValues.netSalary = netSalary.replace(/[-/\\^$*+?,.()|[\]{}]/g, '').trim();
                formValues.discount = discount.replace(/[-/\\^$*+?,.()|[\]{}]/g, '').trim();
                formValues.baseSalary = baseSalary.replace(/[-/\\^$*+?,.()|[\]{}]/g, '').trim();
                dispatch( startCreatingEmployee( formValues ));

            }
        }            
    }

    const formValid = () => {
        if(employeeName.length === 0){
            setmsgError("Employee Name is required");
            return false;
        } else if( employeeLastName.length === 0 ){
            setmsgError("Employee LastName is required");
            return false;
        } else if( departmentId === ''){
            setmsgError("You must select a department");
            return false;
        } else if( studyId === ''){
            setmsgError("You must select a study");
            return false;
        } else if( idNumber.replace(/[-/\\^$*+?.()|[\]{}]/g, '').trim().length !== 11){
            setmsgError("You must write a valid ID");
            return false;
        } else if( sexo === ''){
            setmsgError("You must select a sex");
            return false;
        } else if( address.length <  5 ){
            setmsgError("The address should more than 5 characters");
            return false;
        } else if( homePhone.replace(/[-/\\^$*+?.()|[\]{}]/g, '').trim().length !== 10){
            setmsgError("You must write a valid Home phone");
            return false;
        } else if(mobilePhone.replace(/[-/\\^$*+?.()|[\]{}]/g, '').trim().length !== 10){
            setmsgError("You must write a valid Mobile Phone");
            return false;
        }else if(baseSalary.replace(/[-/\\^$*+?,.()|[\]{}]/g, '').trim().length === 0){
            setmsgError("Base Salary is required");
            return false;
        }else if(discount.replace(/[-/\\^$*+?,.()|[\]{}]/g, '').trim().length === 0){
            setmsgError("Discount is required");
            return false;
        }else if(netSalary.replace(/[-/\\^$*+?,.()|[\]{}]/g, '').trim().length === 0){
            setmsgError("Net Salary is required");
            return false;
        }
        setmsgError( null );
        return true;
    }


    return (
        <div className='container ' >
            <form 
                className="col shadow p-3 my-2  bg-body rounded d-grid"
                onSubmit={ handleSubmit }
            >   
                <div className='row row-cols-lg-auto g-3 align-items-center'>
                    <div className='col-12'>
                        <h3 className='text-center'>Employee Form </h3>

                    </div>
                
                </div>
                    {
                        msgError && 
                        (
                            <div className="text-danger text-center my-2">
                            * { msgError }
                            </div>
                        )
                    }
                            <hr/>
                
                    <div className="row my-1">
                        <div className='col'>
                            <label className="form-label">Employee Name</label>
                            <input 
                                type="text" 
                                className='form-control' 
                                name='employeeName'
                                value={ employeeName }
                                onChange={ handleInputChange }
                                placeholder='Employee Name'
                            />
                         
                        </div>
                        <div className='col'>
                            <label className="form-label">Employee Last Name</label>
                            <input 
                                type="text" 
                                className='form-control' 
                                name='employeeLastName'
                                value={ employeeLastName }
                                onChange={ handleInputChange }
                                placeholder='Employee Last Name'
                            />
                        </div>
                        <div className='col'>
                            <label className="form-label">Department</label>
                            <select className='form-control'
                                name='departmentId' 
                                value={ departmentId }
                                onChange={ handleInputChange }   
                            >
                                  <option value="0" key="0" >Select A Department</option>
                                {
                                    Departments.map( depar => (
                                        <option value={ depar.id } key={ depar.id} >{ depar.deparmentName}</option>
                                    ))
                                }
                                
                            </select>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className='col'>
                            <label className="form-label">Study</label>
                            <select 
                                className='form-control'
                                name='studyId'
                                value={ studyId }
                                onChange={ handleInputChange }
                            >
                                  <option value="0" key="0" >Select A Study</option>
                                   {
                                    Studies.map( study => (
                                      
                                        <option value={ study.id } key={ study.id} >{ study.studyName}</option>
                                    ))
                                }

                            </select>
                        </div>
                        <div className='col'>
                            <label className="form-label">ID Number</label>
                            <NumberFormat 
                                className='form-control'
                                format="###-#######-#"
                                name='idNumber'
                                value={ idNumber }
                                onChange={ handleInputChange }
                                placeholder='ID Number'
                            />
                        </div>
                        <div className='col'>
                            <label className="form-label">Sexo</label>
                            <div className="form-check form-check-inline my-4 mx-2">
                                <input className="form-check-input" 
                                    type="radio" 
                                    name="sexo" 
                                    onChange={ handleCheckChange }  
                                    value={ sexo } 
                                    id="0" />
                                <label className="form-check-label" htmlFor="0">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" 
                                    type="radio" 
                                    name="sexo" 
                                    onChange={ handleCheckChange }  
                                    value={ sexo } 
                                    id="1"  />
                                <label className="form-check-label" htmlFor="1">Female</label>
                            </div>

                        </div>
                    
                
                    </div>
                    <hr/>
                    <div className='row my-3'>
                        <div className='col'>
                            <label className="form-label">Adddress</label>
                            <input 
                                type="text" 
                                className='form-control' 
                                name='address'
                                placeholder='Adddress'
                                value={ address }
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className='col'>
                            <label className="form-label">Home Phone </label>
                            <NumberFormat 
                                className='form-control'
                                format="(###)-###-####"
                                name='homePhone'
                                value={ homePhone }
                                onChange={ handleInputChange }
                                placeholder='Mobile Phone'
                            />
                            {/* <input 
                                type="text" 
                                className='form-control' 
                                name='homePhone'
                                placeholder='Home Phone'
                                value={ homePhone }
                                onChange={ handleInputChange }
                            /> */}
                        </div>
                        <div className='col'>
                            <label className="form-label">Mobile Phone </label>
                            <NumberFormat 
                                className='form-control'
                                format="(###)-###-####"
                                name='mobilePhone'
                                value={ mobilePhone }
                                onChange={ handleInputChange }
                                placeholder='Mobile Phone'
                            />
                        </div>
                   
                     
                    </div>
                    <div className='row my-3'>
                        <div className='col'>
                            <label className="form-label">Base Salary</label>
                            <NumberFormat 
                                className='form-control'
                                thousandSeparator={ true }
                                prefix={'$'}
                                name='baseSalary'
                                value={ baseSalary }
                                onChange={ handleInputChange }
                                placeholder='Base Salary'
                            />
                        </div>
                        <div className='col'>
                            <label className="form-label">Discount </label>
                            <NumberFormat 
                                className='form-control'
                                thousandSeparator={ true }
                                prefix={'$'}
                                name='discount'
                                value={ discount }
                                onChange={ handleInputChange }
                                placeholder='Discount'
                            />
                        </div>
                    
                        <div className='col'>
                            <label className="form-label">Net Salary </label>
                            <NumberFormat 
                                className='form-control'
                                thousandSeparator={ true }
                                prefix={'$'}
                                name='netSalary'
                                value={ netSalary }
                                onChange={ handleInputChange }
                                placeholder='Net Salary'
                            />
                        </div>
                    </div>
                    
                    <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                        <button 
                            type='submit' 
                            className='btn btn-outline-success'
                        > 
                        <i className="far fa-save mx-2"></i>
                            Guardar
                        </button>

                    </div>

            </form>
            
        </div>
    )
}
