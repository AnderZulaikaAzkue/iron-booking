import React, { useState } from 'react';
import { useForm,  } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import clientsService from '../../../services/clients';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBCheckbox } from 'mdb-react-ui-kit';

function ClientsForm() {
  // https://react-hook-form.com/get-started#Applyvalidation
  const { register, handleSubmit, setError, formState: { errors } } = useForm({ mode: 'onBlur' });
  const [serverError, setServerError] = useState(undefined);
  const navigate = useNavigate();


  const onClientSubmit = async (client) => {
    try {
      console.log(client)
      setServerError(undefined);
      console.debug('Registering...')
      client = await clientsService.create(client);
      navigate('/login', { state: { client } });
    } catch (error) {
      const errors = error.response?.data?.errors;
      if (errors) {
        console.error(error.message, errors);
        Object.keys(errors)
          .forEach((inputName) => setError(inputName, { message: errors[inputName] }))
      } else {
        console.error(error);
        setServerError(error.message);
      }
    }
  }

 
  return (
    <>
        <MDBContainer fluid className="p-3 my-5">
          <MDBRow>
            <MDBCol col='10' md='6'>
              <img src="https://www.pngmart.com/files/11/Earth-Travel-World-PNG-Photo.png" class="img-fluid" alt="Phone image" />
            </MDBCol>
            <MDBCol col='4' md='6'>
            <form onSubmit={handleSubmit(onClientSubmit)}>
      <div className="">
        
        {/* NAME */}
          <div className="input-group">
            <span className="input-group-text"><i className='fa fa-user fa-fw'></i></span>
            <input
              type="text"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              placeholder="Name" {...register('name', {
                required: 'User name is required'
              })} />
            {errors.name && <div className='invalid-feedback'>{errors.name?.message}</div>}
          </div>
      

        {/* USERNAME */}
          <div className="input-group">
            <span className="input-group-text"><i className='fa fa-tag fa-fw'></i></span>
            <input
              type="text"
              className={`form-control ${errors.username ? 'is-invalid' : ''}`}
              placeholder="johndoe" {...register('username', {
                required: 'Username is required',
                pattern: {
                  value: /^[a-z0-9]+$/,
                  message: 'Username must be lowercase and without spaces'
                }
              })} />
            {errors.username && <div className='invalid-feedback'>{errors.username?.message}</div>}
          </div>
       

        {/* EMAIL */}
          <div className="input-group">
            <span className="input-group-text"><i className='fa fa-envelope-o fa-fw'></i></span>
            <input
              type="text"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              placeholder="user@example.org" {...register('email', {
                required: 'user email is required',
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: 'user email must be valid'
                }
              })} />
            {errors.email && <div className='invalid-feedback'>{errors.email?.message}</div>}
          </div>
        

        {/* PASSWORD */}
          <div className="input-group">
            <span className="input-group-text"><i className='fa fa-lock fa-fw'></i></span>
            <input
              type="password"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              placeholder="****" {...register('password', {
                required: 'Client password is required',
                minLength: {
                  value: 8,
                  message: 'Client password needs at least 8 chars'
                }
              })} />
            {errors.password && <div className='invalid-feedback'>{errors.password?.message}</div>}
          </div>
        

        {/* LOCATION */}
          <div className="input-group">
            <span className="input-group-text"><i className='fa fa-globe fa-fw'></i></span>
            <input
              type="text"
              className={`form-control ${errors.location ? 'is-invalid' : ''}`}
              placeholder="Madrid" {...register('location', {
                required: 'Client location is required'
              })} />
            {errors.location && <div className='invalid-feedback'>{errors.location?.message}</div>}
          </div>
        </div>
      
      
      {serverError && <div className="alert alert-danger d-none d-lg-block">{serverError}</div>}
    
                <div className="d-flex justify-content-between mx-4 mb-4">
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                  <a href="!#">Forgot password?</a>
                </div>
    
                 <button type="submit" className='btn btn-primary'>Register</button>
    
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">OR</p>
                </div>
    
                <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
                  <MDBIcon fab icon="facebook-f" className="mx-2" />
                  Continue with facebook
                </MDBBtn>
    
                <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#55acee' }}>
                  <MDBIcon fab icon="twitter" className="mx-2" />
                  Continue with twitter
                </MDBBtn>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        </>
      );
}

export default ClientsForm