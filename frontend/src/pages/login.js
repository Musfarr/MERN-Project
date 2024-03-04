import React, { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

const Login = () => {
  
    const [formdata , setformdata] = useState({
        email : '',
        password : '',

    })


    const{ email , password } = formdata



    const onchange = (e) => {
         
        setformdata((prevstate) => ({
          ...prevstate,
          [e.target.name]: e.target.value,
        }));
    }
  return (
    <>
      <section className="heading">
        <h1>
          {" "}
          <FaSignInAlt /> Login
        </h1>
        <p>Login into your accout</p>
      </section>

      <section className="form">
        <form>
          <div className="form-group">
            <input
              className="form-control"
              name = "email"
              placeholder="Email"
              value={email}
              onChange={onchange}
            />
          </div>
          <div className="form-group">
            <input
              type='password'
              name = "password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={onchange}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn-block  btn">
              {" "}
              Submit{" "}
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login