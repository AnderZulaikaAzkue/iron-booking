import React, { useState, useContext } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBCheckbox } from 'mdb-react-ui-kit';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import clientsService from '../../../services/clients';
import { AuthContext } from '../../../contexts/AuthStore';

function ClientsLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const { register, handleSubmit, setError, formState: { errors } } = useForm({ mode: 'onBlur', defaultValues: { username: location?.state?.client?.username } });
  const [serverError, setServerError] = useState(undefined);
  const { onUserChange } = useContext(AuthContext);

  const onLoginSubmit = async (client) => {
    try {
      setServerError();
      client = await clientsService.login(client);
      onUserChange(client);
      navigate('/');
    } catch (error) {
      const errors = error.response?.data?.errors;
      if (errors) {
        Object.keys(errors)
          .forEach((inputName) => setError(inputName, { message: errors[inputName] }))
      } else {
        setServerError(error.message)
      }
    }
  }

  return (
<>
    <MDBContainer fluid className="p-3 my-5">
      <MDBRow>
      
        <MDBCol col='10' md='6'>
          <img src="https://prd-webrepository.firabarcelona.com/wp-content/uploads/sites/69/2022/01/24140416/B-cucurucho.png" class="img-fluid" alt="Phone image" />
        </MDBCol>
        <MDBCol col='4' md='6'>

          {location?.state?.client?.confirm === false && <div className="alert alert-info">You must active your account before login, please check your inbox</div>}
          <form onSubmit={handleSubmit(onLoginSubmit)}>
            {serverError && <div className="alert alert-danger d-none d-lg-block">{serverError}</div>}
            <div className="input-group mb-1 mt-5">
              <span className="input-group-text"><i className='fa fa-tag fa-fw'></i></span>
              <input
                type="text"
                className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                placeholder="username" {...register('username', {
                  required: 'Username is required'
                })} />

              {errors.username && <div className='invalid-feedback'>{errors.username?.message}</div>}
            </div>

            <div className="input-group mb-1">
              <span className="input-group-text"><i className='fa fa-lock fa-fw'></i></span>
              <input
                type="password"
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                placeholder="****" {...register('password', {
                  required: 'User password is required'
                })} />

              {errors.password && <div className='invalid-feedback'>{errors.password?.message}</div>}
            </div>

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              <a href="!#">Forgot password?</a>
            </div>

            <MDBBtn className="mb-4 w-100" size="lg">Sign in</MDBBtn>

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

export default ClientsLogin
