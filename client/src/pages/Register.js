import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo, FormRow, Alert } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';

import { useAppContext } from '../context/appContext'

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
}

const Register = () => {

  const [values, setValues] = useState(initialState);

  // global state and useNavigate
  const { isLoading, showAlert, displayAlert, user, setupUser } = useAppContext();
  const navigate = useNavigate()

  const handleChange = (e) => {
    setValues({
      ...values, 
      [e.target.name]: e.target.value});
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const {name, email, password, isMember} = values;
    if(!email || !password || (!isMember && !name)){
      displayAlert()
      return
    }

    const currentUser = { name, email, password }
    if(isMember){
      setupUser({
        currentUser,
        endPoint: 'login',
        alertText: 'Login Successful! Redirecting...',
      })
    }else{
      setupUser({
        currentUser,
        endPoint: 'register',
        alertText: 'User Created! Redirecting...',
      })
    }
  }

  const toggleMember = () => {
    setValues({...values, isMember: !values.isMember})
  }

  useEffect(() => {
    if(user){
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  },[user, navigate])

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>

        {/* show Alert */}
        {showAlert && <Alert /> }

        {!values.isMember && (
          <FormRow 
            name="name" 
            type="text" 
            value={values.name} 
            handleChange={handleChange}  
            labelText="name"
          />
        )}
        
        <FormRow 
          name="email" 
          type="text" 
          value={values.email} 
          handleChange={handleChange} 
          labelText="email"
        />
        <FormRow 
          name="password" 
          type="password" 
          value={values.password} 
          handleChange={handleChange} 
          labelText="password"
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>{values.isMember ? "Login" : "Register"}</button>

        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>

      </form>
    </Wrapper>
  )
}

export default Register;
