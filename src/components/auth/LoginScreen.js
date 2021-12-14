import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { login } from "../../actions/auth";

export const LoginScreen = () => {

  const [msgError, setMsgError] = useState(null);
  const dispatch = useDispatch();



  const [formValues, setFormValues] = useState({
    name: ''
  });


  const { name } = formValues;


  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if( formValid() ){
      
      dispatch( login( formValues));
      Swal.fire('success', `Welcome ${ name }`, 'success');
    }
  }

  const formValid = () => {
    if( name.length < 2){
      setMsgError("El nombre no puede estar vacio");
      return false
    }

    setMsgError(null);
    return true
  }


  return (
    <div className="login-form">
      <div className="text-center">
        <main className="form-signin">
          <form
            onSubmit={ handleSubmit }  
          >
      
            <h1 className="h3 mb-3 fw-normal">Ingres su nombre</h1>
            {
              msgError && 
              (
                <div className="text-danger">
                  * { msgError }
                </div>
              )
            }
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                value={ name }
                name="name"
                onChange={ handleInputChange }
                id="floatingInput"
                placeholder="John Doe"
              />
              <label htmlFor="floatingInput">Nombre</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary my-3" type="submit">
            Ingresar
            </button>
            <p className="mt-5 mb-3 text-muted">Crud Employee</p>
          </form>
        </main>
      </div>

    </div>
  );
};
