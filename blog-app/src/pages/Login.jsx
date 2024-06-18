import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })

  const changeInputHandle = (e) => {
    setUserData(prevState => {
      return {
        ...prevState, [e.target.name]: e.target.value
      }
    });
  }
  return (
    <section className="login">
      <div className="container">
        <h2>Log In</h2>
        <form className="form login__form">
          <p className="form__error-message">
            This is an error message
          </p>
          <input type="text" name="email" id="" placeholder='Email' value={userData.email} onChange={changeInputHandle} autoSave='' />
          <input type="password" name="password" id="" placeholder='Password' value={userData.password} onChange={changeInputHandle} />
          <button type='submit' className='btn primary'>Login</button>
        </form>
        <small>Don't have an account ? <Link to="/register">Sign up</Link></small>
      </div>
    </section>
  )
}

export default Login